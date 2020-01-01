import React from "react";
import PropTypes from "prop-types";
import styles from "./DifficultySelection.module.css";

export function DifficultySelection({ levels, onChange }) {
    const sortedLevels = levels.sort((a, b) => a.value - b.value);

    return (
        <div>
            <input
                type="range"
                list="tickmarks"
                onChange={onChange}
                step={Math.floor(100 / levels.length)}
            />

            <datalist id="tickmarks" className={styles.tickmarks}>
                {sortedLevels.map(({ label, value }, index) => {
                    const shouldShowLabel = index === 0 || index === levels.length - 1;

                    return (
                        <option
                            value={value}
                            label={shouldShowLabel ? label : null}
                            className={styles.level}
                        ></option>
                    );
                })}
            </datalist>
            {/* TODO: Only display the current value, don't bother displaying first & last. */}
        </div>
    );
}

DifficultySelection.defaultProps = {
    levels: [],
    onChange: null
};

DifficultySelection.propTypes = {
    levels: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.number
        })
    ),
    onChange: PropTypes.func
};
