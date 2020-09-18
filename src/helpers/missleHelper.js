export const missleHelper = (key) => {
    const missle = {
        pos: {
            x: 420,
            y: 230
        },
        velocityX: -3,
        velocityY: -3,
        hit: false,
    }

    if(key === 'd') {
        missle.pos.x = 558;
        missle.velocityX = 3;
    }

    return missle;
}
