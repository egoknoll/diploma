import React, { useEffect, useState } from "react";
import { getMediaQuery } from "../utils/utils";


export const useAppMediaQuery = () => {
    const [windowSize, setWindowSize] = useState('lg')

    const handleResize = () => {
        const size = getMediaQuery(window.innerWidth)
        setWindowSize(size)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [windowSize])

    return windowSize
}
