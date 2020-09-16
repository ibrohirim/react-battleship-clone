export const missleHelper = (key) => {
    const missle = {
        pos: {
            x: 420,
            y: 230
        },
        velocity: -1,
        hit: false,
    }

    if(key === 'd') {
        missle.pos.x = 440;
        missle.velocity = 1;
    }

    return missle;
}
