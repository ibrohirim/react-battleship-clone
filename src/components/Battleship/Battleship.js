import React from 'react';
import battleship from '../../assets/battleship.png';

const Battleship = () => {

    return(
        <div style={{position: 'absolute', top: 250, left: 400}}>
            <img src={battleship} alt="battleship" />
        </div>
    )
}

export default Battleship;