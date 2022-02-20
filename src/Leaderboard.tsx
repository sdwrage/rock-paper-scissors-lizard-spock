import React from 'react';
import './Leaderboard.css'
import LeaderboardEntry from './LeaderboardEntry'
import challengerProps from './props/challengers.json'

class Leaderboard extends React.Component {
    render () {
        return (

            
            <section className="Leaderboard">
                    <h1> Let's get ready to rumble!!</h1>

                    {challengerProps
                        .sort((a, b) => {
                            return b.score - a.score;
                        })
                        .slice(0,10)
                        .map(challenger => (
                            <LeaderboardEntry username={challenger.username} score={challenger.score} />
                        ))
                    }
            </section>
        )
    }
}

export default Leaderboard;