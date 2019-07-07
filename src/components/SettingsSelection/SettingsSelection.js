import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import styles from "./SettingsSelection.module.css";
import { MenuItem } from "../MenuItem/MenuItem";

export function SettingsSelection(props) {
    const { clearAllCellValues, isInSolveMode, resetToOriginalCells, toggleAppMode } = props;
    return (
        <div className={styles.settingsSelection}>
            <MenuItem title="Mode">
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
    isInSolveMode: false
};

SettingsSelection.propTypes = {
    clearAllCellValues: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    resetToOriginalCells: PropTypes.func.isRequired,
    toggleAppMode: PropTypes.func.isRequired
};
