import { useState, useEffect, useRef } from "react";


export function useTypingEffect (textToType, keyStronkeDurationMs) {
    const [currentPosition, setCurrentPosition] = useState(0)
    const currentPositionRef = useRef(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1
            if (currentPositionRef.current > textToType.length) {
                clearInterval(intervalId)
            }
        }, keyStronkeDurationMs)
        return () => {
            clearInterval(intervalId)
            currentPositionRef.current = 0
            setCurrentPosition(0)
        }
    }, [keyStronkeDurationMs, textToType])

    return textToType.substring(0, currentPosition)
}