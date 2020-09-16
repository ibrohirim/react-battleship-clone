import React from 'react';

import Stage from './Stage/Stage';
import { planeHelper } from '../helpers/planeHelper';

const Game = () => {

    return (
        <Stage planes={planeHelper(3)}/>
    )
}

export default Game;