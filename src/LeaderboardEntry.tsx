import React from 'react';
import './LeaderboardEntry.css'

export type LeaderboardEntryProps = {username?: string, score? : number}

class LeaderboardEntry extends React.Component<LeaderboardEntryProps> {
    render () {
        return (
            <article className="LeaderboardEntry">
                <h2>{ this.props.username }</h2>
                <p> High Score: { this.props.score }</p>
            </article>

        )
    }
}

export default LeaderboardEntry;