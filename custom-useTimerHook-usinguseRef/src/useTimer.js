import { useState, useRef } from "react";
const useTimer = (totalDuration)  => {
    const [isRunning, setIsRunning]  = useState(false);
    const [seconds, setSeconds] = useState(totalDuration);
    const timerID = useRef(null)
   
    const start = () => {
        /**
         * start the timer
         * derement seconds every 1 sec
         * update is running --> tru
         */
        setIsRunning(true)
        function startProgress() {
            setSeconds((prevValue) => {
                const newVal = prevValue-1
                if(newVal < 1) clearInterval(timerID.current)
                return newVal
            })
        }
        timerID.current= setInterval(startProgress, 1000)        
    }
    
    const stop = () => {
        clearInterval(timerID.current);
        setIsRunning(false);
        setSeconds(totalDuration);
    }

    return {
        isRunning,
        start,
        stop,
        seconds
    };

}

export default useTimer;