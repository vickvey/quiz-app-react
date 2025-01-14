import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./../styles/Timer.css";

export default function Timer({ deadline, setTimerComplete }) {
  const [time, setTime] = useState(deadline);

  useEffect(() => {
    const id = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) {
      setTimerComplete((prevVal) => !prevVal);
      return clearTimeout(id);
    }
  }, [time]);
  return <div className="timer">{time} seconds remaining...</div>;
}

Timer.propTypes = {
  deadline: PropTypes.number.isRequired,
  isTimeComplete: PropTypes.bool,
};
