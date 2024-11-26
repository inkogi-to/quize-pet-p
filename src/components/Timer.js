import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      const interval = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(interval);
    },
    [dispatch,secondsRemaining]
  );
  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
