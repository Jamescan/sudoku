import React from "react";
import PropTypes from "prop-types";
import styles from "./SettingsSelection.module.css";
import { MenuItem } from "../MenuItem/MenuItem";
import { Button } from "semantic-ui-react";

export function SettingsSelection(props) {
    const {
        checkValidSolution,
        clearAllCellValues,
        isInSolveMode,
        isUsingPencilMarks,
        resetToOriginalCells,
        toggleAppMode,
        toggleEntryMethod,
        toggleShowAllErrors,
        toggleShowObviousErrors
    } = props;
    return (
        <div className={styles.settingsSelection}>
            <MenuItem title="Menu">
                <Button.Group>
                    <Button onClick={toggleAppMode} active={!isInSolveMode}>
                        Capture
                    </Button>
                    <Button onClick={toggleAppMode} active={isInSolveMode}>
                        Solve
                    </Button>
                </Button.Group>
                {isInSolveMode ? (
                    <Button onClick={() => resetToOriginalCells()}>Reset to Original Cells</Button>
                ) : (
                    <Button onClick={() => clearAllCellValues()}>Clear All Cells</Button>
                )}
            </MenuItem>
        </div>
    );
}

SettingsSelection.defaultProps = {
    isInSolveMode: false,
    isUsingPencilMarks: false
};

SettingsSelection.propTypes = {
    checkValidSolution: PropTypes.func.isRequired,
    clearAllCellValues: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    resetToOriginalCells: PropTypes.func.isRequired,
    toggleAppMode: PropTypes.func.isRequired,
    toggleEntryMethod: PropTypes.func.isRequired,
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
