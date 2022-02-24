import React from 'react';
import './Leaderboard.css';
import { LeaderboardEntry } from './LeaderboardEntry';
import { store } from "./stores";
import { observer } from "mobx-react";
import { IChallenger } from './stores/LeaderboardEntryStore';

export const Leaderboard: React.FC<{}> = observer((props) => {
    const challengers = store.challengers.slice();
    challengers.sort((a: IChallenger,b: IChallenger) => {
        return a.rank - b.rank;
    });

    return (
        <section className="Leaderboard">
                <h1> Let's get ready to rumble!!</h1>

                {challengers
                    .map(challenger => (
                        <LeaderboardEntry username={challenger.username} score={challenger.score} rank={challenger.rank} tied={challenger.tied} />
                    ))
                }
        </section>
    )
});