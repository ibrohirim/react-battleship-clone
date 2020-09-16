import React from 'react';

import explode from '../../assets/airplane_explosion.png'

const Explosion = () => {

    return(
        <div className="explosion" style={{position: "absolute"}}>
            <img src={explode} alt="explosion" />
        </div>
    )
}

export default Explosion;