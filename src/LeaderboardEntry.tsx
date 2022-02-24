import React, {useEffect} from 'react';
import { observer } from "mobx-react"
import './LeaderboardEntry.css'
import {store} from './stores'

export type LeaderboardEntryProps = {username?: string, score? : number, rank? : number, tied : boolean}

export const LeaderboardEntry: React.FC<LeaderboardEntryProps> = observer((props) => {

    useEffect(() => {
        const ref = window.setInterval(() => store.calculateAllScores(), 2000);
        return () => window.clearInterval(ref);
    });

    const ordinal = (n : any) => {
        var s = ["th", "st", "nd", "rd"];
        var v = n%100;
        return n + (s[(v-20)%10] || s[v] || s[0]);
    };

    return (
        <article className="LeaderboardEntry">
            <h2>{ props.username }</h2>
            <p> High Score: { props.score }</p>
            <p>Rank: { props.tied ? 'T-' : '' } {ordinal(props.rank)}</p>
        </article>
    )
});