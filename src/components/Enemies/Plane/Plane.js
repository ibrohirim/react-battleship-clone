import React, { useEffect, useState } from 'react';

import big_airplane from '../../../assets/big_airplane.png';
import big_airplane_flip from '../../../assets/big_airplane_flip.png';
import little_airplane from '../../../assets/little_airplane.png';
import little_airplane_flip from '../../../assets/little_airplane_flip.png';
import medium_airplane from '../../../assets/medium_airplane.png';
import medium_airplane_flip from '../../../assets/medium_airplane_flip.png';


const Plane = ({plane}) => {

    const [imgF, setImgF] = useState('');
    const [x, setX] = useState('');
    useEffect(() => {
        setX(plane.pos.x);
        setImgF(chooseImg(plane.type, plane.velocity))
    }, [plane.type, plane.pos.x, plane.velocity])


    const chooseImg = (type, dir) => {
        if(dir === -1) {
            switch(type) {
                case 'big':
                    return big_airplane;
                case 'medium':
                    return medium_airplane;
                default:
                    return little_airplane;
            }
        } else {
            switch(type) {
                case 'big':
                    return big_airplane_flip;
                case 'medium':
                    return medium_airplane_flip;
                default:
                    return little_airplane_flip;
            }
        }
    }

    return(
        <div style={{position: 'absolute', top: plane.pos.y, left: x}}>
            <img src={imgF} alt="airplane enemy unit" />
        </div>
    )
}

export default Plane;