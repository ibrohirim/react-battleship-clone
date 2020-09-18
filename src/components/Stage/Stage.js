import React, { useState } from 'react';

import './Stage.css'

import Battleship from '../Battleship/Battleship';
import Plane from '../Enemies/Plane/Plane';

import useInterval from '../../hooks/useInterval';
import Missle from '../Missle/Missle';
import Explosion from '../Explosion/Explosion';
import { missleHelper } from '../../helpers/missleHelper';

const Stage = ({planes}) => {

    const [statedPlanes, setStatedPlanes] = useState(planes);
    const [missles, setMissles] = useState([]);
    const [dead, setDead] = useState([]);

    useInterval(() => {
        check();
    }, 16);

    const check = () => {
        const newPlanes = statedPlanes.map(p => {
            let vel = p.velocity;
            const newX = p.pos.x+vel;
            if(newX > 941 || newX < -50) {
                vel *= -1;
            }
            return {...p, pos: {x: newX, y: p.pos.y}, velocity: vel}
        }).filter(p => p.hit !== true);
        const newMissles = missles.map(m => {
            const newPos = {x: m.pos.x + m.velocityX, y: m.pos.y + m.velocityY}
            return {...m, pos: newPos};
        }).filter(m => m.pos.y > -30 || m.hit === true);
        const d = []
        for(let p of newPlanes) {
            for(let m of newMissles) {
                if(p.pos.x <= m.pos.x && (p.pos.x + p.size.w) >= m.pos.x && p.pos.y <= m.pos.y && (p.pos.y + p.size.h) >= m.pos.y) {
                    p.hit = true;
                    m.hit = true;
                    d.push(p.pos);
                }
            }
        }
        setDead(d);
        setStatedPlanes(newPlanes);
        setMissles(newMissles);
    }


    const handleKeyPress = (event) => {
        if(event.key === 'a' || event.key === 'd') {
            setMissles([...missles, missleHelper(event.key)]);
        }
    }

    return (
        <div className="stage" onKeyPress={handleKeyPress} tabIndex={"-1"}>
            { missles && missles.map((m, i) => (<Missle key={i} missle={m}/>))}
            <Battleship />
            { dead && dead.map((d, i) => (<Explosion key={i} pos={d}/>))}
           { statedPlanes && statedPlanes.map(((p, i) => (<Plane key={i} plane={p} />)))}
        </div>
    )
}

export default Stage;