import React from 'react';

import './Score.css';

const Score = ({score}) => {

    return (
        <div className="score-wrap">
            <span>{score}</span>
        </div>
    )
}

export default Score;