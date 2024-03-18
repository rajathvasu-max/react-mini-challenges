import { useState, useEffect} from "react";

const useTimer = (totalDuration)  => {
    const [isRunning, setIsRunning]  = useState(false);
    const [seconds, setSeconds] = useState(totalDuration);
    let timerID;

    useEffect(() => {
        if(isRunning){
            start()
        }

        return () => {
            clearInterval(timerID)
        }

    },[isRunning])
   
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
                if(newVal < 1) clearInterval(timerID)
                return newVal
            })
        }
        timerID= setInterval(startProgress, 1000)
        console.log(timerID);
        
    }
    
    const stop = () => {
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