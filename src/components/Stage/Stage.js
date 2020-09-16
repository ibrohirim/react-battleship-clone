import React, { useEffect, useState } from 'react';

import './Stage.css'

import Battleship from '../Battleship/Battleship';
import Plane from '../Enemies/Plane/Plane';

import useInterval from '../../hooks/useInterval';
import Missle from '../Missle/Missle';
import { missleHelper } from '../../helpers/missleHelper';

const Stage = ({planes}) => {

    const [statedPlanes, setStatedPlanes] = useState(planes);
    const [missles, setMissles] = useState([]);

    useInterval(() => {
        const newPlanes = statedPlanes.map(p => {
            let vel = p.velocity;
            const newX = p.pos.x+vel;
            if(newX > 941 || newX < -50) {
                vel *= -1;
            }
            return {...p, pos: {x: newX, y: p.pos.y}, velocity: vel}
        });
        const newMissles = missles.map(m => {
            const vel = m.velocity;
            const newPos = {x: m.pos.x + vel, y: m.pos.y + vel}

            return {...m, pos: newPos};
        }).filter(m => m.pos.y > -30);
        setStatedPlanes(newPlanes);
        setMissles(newMissles);
    }, 16);



    const handleKeyPress = (event) => {
        if(event.key === 'a' || event.key === 'd') {
            setMissles([...missles, missleHelper(event.key)]);
        }
        console.log(missles.length);
    }

    return (
        <div className="stage" onKeyPress={handleKeyPress} tabIndex={"-1"}>
            { missles && missles.map((m, i) => (<Missle key={i} missle={m}/>))}
            <Battleship />
           { statedPlanes && statedPlanes.map(((p, i) => (<Plane key={i} plane={p} />)))}
        </div>
    )
}

export default Stage;