import { useState } from "react"
import { useEffect } from "react"

const useWindowSize = () => {
    const [windowsSize, setWindowsSize] = useState({
        width: undefined,
        height: undefined
    })
    useEffect(() => {
        const handleSize = () => {
            setWindowsSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleSize();

        window.addEventListener('resize', handleSize);

        const cleanUp = () => {
            window.removeEventListener('resize', handleSize)
        }
        return cleanUp

    }, [])
    return windowsSize

}


export default useWindowSize