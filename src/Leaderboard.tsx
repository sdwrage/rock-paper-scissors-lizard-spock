import React, { useState, useEffect } from 'react';
import './Leaderboard.css'
import LeaderboardEntry from './LeaderboardEntry';
import { LeaderboardEntryStore } from "./stores/LeaderboardEntryStore";
import { useStores } from "./use-stores";

let leaderboardEntryStore = new LeaderboardEntryStore();
leaderboardEntryStore.calculateAllScores();
//const { leaderboardEntryStore } = useStores();

class Leaderboard extends React.Component {
    render () {
        return (
            <section className="Leaderboard">
                    <h1> Let's get ready to rumble!!</h1>

                    {leaderboardEntryStore.challengers
                        .sort((a, b) => {
                            return b.score - a.score;
                        })
                        .map(challenger => (
                            <LeaderboardEntry username={challenger.username} score={challenger.score} rank={challenger.rank} tied={challenger.tied} />
                        ))
                    }
            </section>
        )
    }
}

export default Leaderboard;