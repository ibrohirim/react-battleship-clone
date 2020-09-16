export const missleHelper = (key) => {
    const missle = {
        pos: {
            x: 420,
            y: 230
        },
        velocityX: -1,
        velocityY: -1,
        hit: false,
    }

    if(key === 'd') {
        missle.pos.x = 555;
        missle.velocityX = 1;
    }

    return missle;
}
