import React from 'react';

import explode from '../../assets/airplane_explosion.png'

const Explosion = ({pos}) => {

    return(
        <div className="explosion" style={{position: "absolute", left: pos.x, top: pos.y}}>
            <img src={explode} alt="explosion" />
        </div>
    )
}

export default Explosion;