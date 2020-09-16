import { useEffect, useState } from "react";


const useMove = (xPos, velocity) => {
    const [newPos, setNewPos] = useState('');

    useEffect(() => {
        const p = xPos + velocity;
        setNewPos(p);
    }, [xPos, velocity])

    return newPos;
}

export default useMove;