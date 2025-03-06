import {useEffect} from "react";
import {useQuiz} from "../context/QuizContext";

function Timer() {
    const {dispatch, secondsRemaining} = useQuiz()
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect(
        function () {
            const interval = setInterval(function () {
                dispatch({type: "tick"});
            }, 1000);
            return () => clearInterval(interval);
        },
        [dispatch, secondsRemaining]
    );
    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins} : {seconds < 10 && "0"}
            {seconds}
        </div>
    );
}

export default Timer;
