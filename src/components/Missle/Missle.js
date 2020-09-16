import React, { useEffect, useState } from 'react';

import depth_charge from '../../assets/depth_charge.png';

const Missle = ({missle}) => {

    const [x, setX] = useState(420);
    const [y, setY] = useState(230);

    useEffect(() => {
        setX(missle.pos.x)
        setY(missle.pos.y)
    }, [missle.pos.x, missle.pos.y])

    return(
        <div className="missle" style={{position: 'absolute', top: y, left: x}}>
            <img src={depth_charge} alt="missle" />
        </div>
    )
}

export default Missle;