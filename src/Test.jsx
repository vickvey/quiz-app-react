import { useState } from "react";
import "./Test.css";
import Timer from "./components/Timer";

function Results() {
    return <div className="results">Oops! Timeout!!</div>;
}

export default function Test() {
    const [timerComplete, setTimerComplete] = useState(false);
    return (
        <div className="test">
            {!timerComplete ? (
                <Timer deadline={30} setTimerComplete={setTimerComplete} />
            ) : (
                <Results />
            )}
        </div>
    );
}
