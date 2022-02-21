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
        // This is all you need to make the store use mobx
        // and trigger updates automatically
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
        let handicap : number = -3;
        let sortedChallengers = challengers.sort((a, b) => { return a.score - b.score});
        let last10Challengers = sortedChallengers.slice(0,10);

        if (last10Challengers.filter(challengers => challengers.id == challenger.id)) {
            handicap = 3;
        }

        let simulatedWin = ((Math.floor((Math.random() * 10) + 1) + handicap) > 5) ? 1 : -1;

        challenger.score += simulatedWin;

        this.updateChallenger(challenger);
    };

    public calculateAllScores() {
        challengers.forEach((challenger) => {
            this.calculateChallengerScore(challenger);
        });

        // Set ranks and Ties

        // let orderedChallengers : any = challengers.sort((a, b) => { return b.score - a.score});

        // for (let i = 0; orderedChallengers.length; i++) {
        //     // Lets add the rank first
        //     orderedChallengers[i].rank = i + 1;

        //     // Check score for ties
        //     orderedChallengers[i].tied = false;

        //     if (orderedChallengers[i].score == orderedChallengers[i+1].score) {
        //         orderedChallengers[i].tied = true;
        //     }

        //     if (i != 0 && (orderedChallengers[i].score == orderedChallengers[i-1].score)) {
        //         orderedChallengers[i].tied = true;
        //     }
        // }

        // this.challengers = orderedChallengers;
    }
}