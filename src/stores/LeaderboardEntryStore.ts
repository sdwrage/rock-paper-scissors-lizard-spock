import {makeAutoObservable } from "mobx";
import challengers from "../props/challengers.json"

export interface IChallenger {
    id: number,
    username: string,
    score: number,
    rank: number,
    tied: boolean
}

export class LeaderboardEntryStore {
    public challengers: IChallenger[] = challengers; 

    constructor() {
        makeAutoObservable(this);
    }

    public updateChallenger = (updatedChallenger: IChallenger) => {
        const updatedChallengers = this.challengers.map(challenger => {
            if (challenger.id === updatedChallenger.id) {
            return { ...updatedChallenger };
            }
            return challenger;
        });
        this.challengers = updatedChallengers;
    };

    // This is a simulated score to move the challenger scores either up or down randomly
    public calculateChallengerScore = (challenger : IChallenger) => {

        let sortedChallengers = challengers.sort((a, b) => { return a.score - b.score});
        sortedChallengers.forEach((challenger) => {
            let handicap = challenger.rank / challengers.length;
            let simulatedWin = ((Math.floor((Math.random() * 10) + 1) + handicap) > 5) ? 1 : -1;

            challenger.score += simulatedWin;
            this.updateChallenger(challenger);
            return challenger;
        });    
    };

    public calculateAllScores() {
        challengers.forEach((challenger) => {
            this.calculateChallengerScore(challenger);
        });

         challengers.sort((a, b) => {
            return b.score - a.score;
        });

        challengers.forEach((challenger, index) => {
            challenger.rank = index + 1;
            this.updateChallenger(challenger);
        });
    }
}