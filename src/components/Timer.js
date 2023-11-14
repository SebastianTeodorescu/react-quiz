import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const remainingSeconds = secondsRemaining % 60;

  useEffect(
    function () {
      const intervalId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(intervalId);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes} :{remainingSeconds < 10 && "0"}
      {remainingSeconds}
    </div>
  );
}

export default Timer;
