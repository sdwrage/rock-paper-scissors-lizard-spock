import React from 'react';
import './LeaderboardEntry.css'

export type LeaderboardEntryProps = {username?: string, score? : number, rank? : number, tied : boolean}

class LeaderboardEntry extends React.Component<LeaderboardEntryProps> {

    ordinal(n : any) {
        var s = ["th", "st", "nd", "rd"];
        var v = n%100;
        return n + (s[(v-20)%10] || s[v] || s[0]);
    }

    render () {
        return (
            <article className="LeaderboardEntry">
                <h2>{ this.props.username }</h2>
                <p> High Score: { this.props.score }</p>
                {/* <p>Rank: {this.ordinal(this.props.rank)}</p> */}
            </article>

        )
    }
}

export default LeaderboardEntry;