import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "mdi-react/DeleteIcon";
import UndoVariantIcon from "mdi-react/UndoVariantIcon";
import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./PrimarySettings.module.css";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

export function PrimarySettings(props) {
    const { clearAllCellValues, isInSolveMode, resetToOriginalCells, toggleAppMode } = props;
    return (
        <div className={styles.settingsSelection}>
            <MenuItem title="Mode" additionalClassNames={styles.central}>
                <ButtonGroup
                    buttons={[
                        {
                            isSelected: !isInSolveMode,
                            title: "Capture",
                            handleClick: toggleAppMode
                        },
                        {
                            isSelected: isInSolveMode,
                            title: "Solve",
                            handleClick: toggleAppMode
                        }
                    ]}
                />
            </MenuItem>
            <MenuItem additionalClassNames={styles.right}>
                {isInSolveMode ? (
                    <button
                        type="button"
                        className={styles.sideButton}
                        onClick={resetToOriginalCells}
                    >
                        <UndoVariantIcon size={50} aria-hidden />
                        Reset to Original Cells
                    </button>
                ) : (
                    <button
                        type="button"
                        className={styles.sideButton}
                        onClick={clearAllCellValues}
                    >
                        <DeleteIcon size={50} aria-hidden />
                        Clear All Cells
                    </button>
                )}
            </MenuItem>
        </div>
    );
}

PrimarySettings.defaultProps = {
    isInSolveMode: false
};

PrimarySettings.propTypes = {
    clearAllCellValues: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    resetToOriginalCells: PropTypes.func.isRequired,
    toggleAppMode: PropTypes.func.isRequired
};
