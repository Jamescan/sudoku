import React from "react";
import PropTypes from "prop-types";
import styles from "./SettingsSelection.module.css";
import { MenuItem } from "../MenuItem/MenuItem";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";

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
            <MenuItem title="Mode">
                <ButtonGroup
                    buttons={[
                        {
                            // additionalClassNames: styles.entryMethodButton,
                            handleClick: toggleAppMode,
                            isSelected: !isInSolveMode,
                            title: "Capture"
                        },
                        {
                            // additionalClassNames: styles.entryMethodButton,
                            handleClick: toggleAppMode,
                            isSelected: isInSolveMode,
                            title: "Solve"
                        }
                    ]}
                />
                {isInSolveMode ? (
                    <button type="button" onClick={() => resetToOriginalCells()}>
                        Reset to Original Cells
                    </button>
                ) : (
                    <button type="button" onClick={() => clearAllCellValues()}>
                        Clear All Cells
                    </button>
                )}
            </MenuItem>

            {isInSolveMode && (
                <>
                    <MenuItem title="Highlight Mistakes?">
                        <CheckboxGroup
                            checkboxes={[
                                {
                                    id: "obviousErrors",
                                    handleSelection: toggleShowObviousErrors,
                                    label: "Obvious Errors"
                                },
                                {
                                    id: "allErrors",
                                    handleSelection: toggleShowAllErrors,
                                    label: "All Errors"
                                }
                            ]}
                        />
                    </MenuItem>
                    <MenuItem title="Entry Method">
                        <ButtonGroup
                            buttons={[
                                {
                                    additionalClassNames: styles.entryMethodButton,
                                    handleClick: toggleEntryMethod,
                                    isSelected: !isUsingPencilMarks,
                                    title: "Big"
                                },
                                {
                                    additionalClassNames: styles.entryMethodButton,
                                    handleClick: toggleEntryMethod,
                                    isSelected: isUsingPencilMarks,
                                    title: "Little"
                                }
                            ]}
                        />
                    </MenuItem>
                    <MenuItem title="Misc">
                        <ButtonGroup
                            buttons={[
                                {
                                    // additionalClassNames: styles.entryMethodButton,
                                    handleClick: () => alert("TODO!"),

                                    // "Clear All" can always be selected again (never disabled)
                                    isSelected: false,
                                    title: "Clear All"
                                },
                                {
                                    // additionalClassNames: styles.entryMethodButton,
                                    handleClick: () => checkValidSolution(),
                                    // isSelected: shouldHighlightIncorrectPencilMarks, // todo
                                    title: "Check Solution"
                                }
                            ]}
                        />
                    </MenuItem>
                </>
            )}
        </div>
    );
}

SettingsSelection.defaultProps = {
    isInSolveMode: false,
    isUsingPencilMarks: false
};

SettingsSelection.propTypes = {
    clearAllCellValues: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    resetToOriginalCells: PropTypes.func.isRequired,
    toggleAppMode: PropTypes.func.isRequired,
    toggleEntryMethod: PropTypes.func.isRequired,
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
