import React, { useState } from 'react';

import './Stage.css'

// components to be rendered
import Battleship from '../Battleship/Battleship';
import Plane from '../Enemies/Plane/Plane';
import Missle from '../Missle/Missle';
import Explosion from '../Explosion/Explosion';

// hooks and helpers
import useInterval from '../../hooks/useInterval';
import { missleHelper } from '../../helpers/missleHelper';
import { planeHelper } from '../../helpers/planeHelper';
import Score from '../Score/Score';

const Stage = ({planes}) => {

    const [statedPlanes, setStatedPlanes] = useState(planes);
    const [missles, setMissles] = useState([]);
    const [dead, setDead] = useState([]);
    const [score, setScore] = useState(0);

    useInterval(() => {
        check();
    }, 16);

    const check = () => {
        // plane check
        const newPlanes = statedPlanes.map(p => {
            let vel = p.velocity;
            const newX = p.pos.x+vel;
            if(newX > 941 || newX < -50) {
                vel *= -1;
            }
            return {...p, pos: {x: newX, y: p.pos.y}, velocity: vel}
        }).filter(p => p.hit !== true);

        //missle checks
        const newMissles = missles.map(m => {
            const newPos = {x: m.pos.x + m.velocityX, y: m.pos.y + m.velocityY}
            return {...m, pos: newPos};
        }).filter(m => m.pos.y > -30).filter(m => m.hit !== true);

        const d = []
        for(let p of newPlanes) {
            for(let m of newMissles) {
                if(p.pos.x <= m.pos.x && (p.pos.x + p.size.w) >= m.pos.x && p.pos.y <= m.pos.y && (p.pos.y + p.size.h) >= m.pos.y) {
                    p.hit = true;
                    m.hit = true;
                    d.push(p.pos);
                    if(p.type === 'big') {
                        setScore(score + 1);
                    } else if (p.type === 'medium') {
                        setScore(score + 2);
                    } else {
                        setScore(score + 3);
                    }
                }
            }
        }
        setDead(d);
        setStatedPlanes(newPlanes);
        if(statedPlanes.length < 6) {
            setStatedPlanes([...newPlanes, ...planeHelper(1)])
        }
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
           <Score score={score} />
        </div>
    )
}

export default Stage;