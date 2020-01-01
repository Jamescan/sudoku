import React, { useState } from "react";
import PropTypes from "prop-types";
import { DIFFICULTY_LEVELS } from "../../constants";
import styles from "./DifficultySelection.module.css";

export function DifficultySelection({ levels, onChange }) {
    const [currentSelection, setCurrentSelection] = useState(0);

    const currentLevel = DIFFICULTY_LEVELS.find(
        level => Math.abs(currentSelection - level.value) < 2
    ).label;

    const sortedLevels = levels.sort((a, b) => a.value - b.value);

    return (
        <div className={styles.selectionWrapper}>
            <input
                type="range"
                list="tickmarks"
                onChange={(e) => {
                    setCurrentSelection(e.target.value);
                    onChange(e); 
                }}
                defaultValue={0}
                max={DIFFICULTY_LEVELS[DIFFICULTY_LEVELS.length-1].value}
                step={Math.floor(100 / levels.length)}
            />

            <datalist id="tickmarks">
                {sortedLevels.map(({ label, value }, index) => {
                    const shouldShowLabel = index === 0 || index === levels.length - 1;

                    return (
                        <option
                            value={value}
                            label={shouldShowLabel ? label : null}
                         />
                    );
                })}
            </datalist>
            <span>{ currentLevel }</span>
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
