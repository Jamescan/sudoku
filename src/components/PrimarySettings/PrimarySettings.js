import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./PrimarySettings.module.css";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

export function PrimarySettings(props) {
    const { clearAllCellValues, isInSolveMode, resetToOriginalCells, toggleAppMode } = props;
    return (
        <div className={styles.settingsSelection}>
            <MenuItem title="Mode">
                <ButtonGroup
                    buttons = {[
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

                {isInSolveMode ? (
                    <Button onClick={() => resetToOriginalCells()}>Reset to Original Cells</Button>
                ) : (
                    <Button onClick={() => clearAllCellValues()}>Clear All Cells</Button>
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
