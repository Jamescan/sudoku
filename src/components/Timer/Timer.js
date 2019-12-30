import React, { useState } from "react";
import PropTypes from "prop-types";
import PauseIcon from "mdi-react/PauseIcon";
import PlayIcon from "mdi-react/PlayIcon";
import RestartIcon from "mdi-react/RestartIcon";
import { convertSecondsToDisplay } from "../../utils";
import styles from "./Timer.module.css";

export function Timer({ shouldStart }) {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [timer, setTimer] = useState(null);
    const isTimerRunning = timer != null;

    const startTimer = () => {
        setTimer(
            setInterval(() => {
                setElapsedSeconds(prevElapsedSeconds => prevElapsedSeconds + 1);
            }, 1000)
        );
    };

    const stopTimer = () => {
        clearInterval(timer);
        setTimer(null);
    };

    // Automatically start timer on start of solve mode
    if (shouldStart && timer == null && elapsedSeconds === 0) {
        startTimer();
    }

    return (
        <div className={styles.timerWrapper}>
            <span className={styles.timer}>{convertSecondsToDisplay(elapsedSeconds)}</span>
            <div className={styles.timerControls}>
                {isTimerRunning && (
                    <button className={styles.timerControl} onClick={stopTimer} type="button">
                        <PauseIcon aria-hidden />
                        Pause
                    </button>
                )}
                {!isTimerRunning && (
                    <button
                        className={styles.timerControl}
                        onClick={startTimer}
                        disabled={isTimerRunning}
                        type="button"
                    >
                        <PlayIcon aria-hidden />
                        Resume
                    </button>
                )}

                <button
                    className={styles.timerControl}
                    onClick={() => {
                        setElapsedSeconds(0);
                        stopTimer();
                    }}
                    type="button"
                >
                    <RestartIcon aria-hidden />
                    Reset
                </button>
            </div>
        </div>
    );
}

Timer.defaultProps = {
    shouldStart: true
};

Timer.propTypes = {
    shouldStart: PropTypes.bool
};
