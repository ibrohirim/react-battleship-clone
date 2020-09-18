export const planeHelper = (numPlanes) => {
    const planes = [];
    for(let i = 0; i < numPlanes; i++) {
        planes.push(buildPlane())
    }
    return planes;
}

const buildPlane = () => {
    const plane = {
        pos: {
            x: -50,
            y: 0
        },
        hit: false,
        type: 'big',
        velocity: 1,
        size: {
            w: 50,
            h: 18
        }
    }

    let rand = Math.random();
    if(rand < 0.5) {
        plane.pos.x = 941;
        plane.velocity = -1;
    }

    rand = ((Math.random() * 15 + 1));

    if(rand  < 6 ) {
        plane.type = 'little';
        plane.size = {w: 18, h: 14}
    } else if (rand > 5 && rand < 10) {
        plane.type = 'medium';
        plane.size = {w: 34, h:18}
    } else {
        plane.type = 'big';
    }

    rand = ((Math.random() *200) + 1);
    plane.pos.y = rand;
    return plane
}