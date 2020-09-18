import React, { useEffect, useState } from 'react';

const Missle = ({missle}) => {

    const [x, setX] = useState(420);
    const [y, setY] = useState(230);
    const [startX, setStartX] = useState(10);
    const [endX, setEndX] = useState(0);

    useEffect(() => {
        setX(missle.pos.x)
        setY(missle.pos.y)
        if(missle.velocityX > 0) {
            setStartX(0)
            setEndX(10);
        } else {
            setStartX(10)
            setEndX(0);
        }
    }, [missle.pos.x, missle.pos.y, missle.velocityX])

    return(
        <div className="missle" style={{position: 'absolute', top: y, left: x}}>
            <svg width="10" height="10">
                <line x1={startX} y1="10" x2={endX} y2="0" style={{stroke: "gray", strokeWidth: 2}}/>
            </svg>
        </div>
    )
}

export default Missle;