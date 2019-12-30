import React, { useState } from "react";
import PropTypes from "prop-types";
import PauseIcon from "mdi-react/PauseIcon";
import PlayIcon from "mdi-react/PlayIcon";
import RestartIcon from "mdi-react/RestartIcon";
import styles from "./Timer.module.css";

export function Timer() {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [timer, setTimer] = useState(null);
    const isTimerRunning = timer != null;

    const padding = elapsedSeconds%60 < 10 ? "0" : ""
    const displayTime = `${Math.floor(elapsedSeconds/60)}:${padding}${elapsedSeconds%60}`;

    return (
        <div className={styles.timerWrapper}>
            <span className={styles.timer}>{displayTime}</span>
            <div className={styles.timerControls}>
                {/* TODO: Automatically start timer on start of solve mode*/}
                {/* TODO: Disable buttons when appropriate */}
                {/* TODO: Should not be able to press start more than once. */}
                <button className={styles.timerControl} onClick={() => setTimer(setInterval(() => { setElapsedSeconds(elapsedSeconds => elapsedSeconds+1) }, 1000))} disabled={isTimerRunning}>
                    <PlayIcon aria-hidden />
                    Start
                </button>
                <button className={styles.timerControl} onClick={() => {
                    clearInterval(timer);
                    setTimer(null);
                }}>
                    <PauseIcon aria-hidden />
                    Pause
                </button>
                <button className={styles.timerControl} onClick={() => {
                    setElapsedSeconds(0);
                    clearInterval(timer);
                    setTimer(null);
                }}>
                    <RestartIcon aria-hidden />
                    Reset
                </button>
            </div>
        </div>
    );
}

Timer.defaultProps = {

};

Timer.propTypes = {

};
