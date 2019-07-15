import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./SidebarSettings.module.css";

export function SidebarSettings(props) {
    const {
        clearAllPencilMarks,
        getSudoku,
        isInSolveMode,
        isSolved,
        isUsingPencilMarks,
        toggleEntryMethod,
        toggleShowAllErrors,
        toggleShowObviousErrors
    } = props;
    return (
        <div className={styles.sidebarSettingsWrapper}>
            {!isInSolveMode && (
                <SidebarItem title="">
                    <button type="button" onClick={getSudoku}>
                        Generate a New Sudoku
                    </button>
                </SidebarItem>
            )}
            {isInSolveMode && (
                <>
                    <SidebarItem title="Validation">
                        <CheckboxGroup
                            checkboxes={[
                                {
                                    id: "obviousErrors",
                                    handleSelection: toggleShowObviousErrors,
                                    label: "Show Obvious Errors"
                                },
                                {
                                    id: "allErrors",
                                    handleSelection: toggleShowAllErrors,
                                    label: "Show All Errors"
                                }
                            ]}
                        />
                    </SidebarItem>
                    <SidebarItem title="Entry Method">
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
                    </SidebarItem>
                    <SidebarItem title="Misc.">
                        <ButtonGroup
                            buttons={[
                                {
                                    // additionalClassNames: styles.entryMethodButton,
                                    handleClick: () => clearAllPencilMarks(),

                                    // "Clear All" can always be selected again (never disabled)
                                    isSelected: false,
                                    title: "Clear All Pencil Marks"
                                },
                                {
                                    handleClick: () => {
                                        if (isSolved) {
                                            alert("Looks good!");
                                        } else {
                                            alert("Not the solution.");
                                        }
                                    },
                                    title: "Check Solution"
                                }
                            ]}
                        />
                        {/* TODO: Maybe a use-case for a modal? */}
                        <p>List of Keyboard Shortcuts</p>
                        <p>q: Toggle Entry Method</p>
                    </SidebarItem>
                </>
            )}
        </div>
    );
}

SidebarSettings.defaultProps = {
    isInSolveMode: false,
    isUsingPencilMarks: false
};

SidebarSettings.propTypes = {
    clearAllPencilMarks: PropTypes.func.isRequired,
    getSudoku: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    toggleEntryMethod: PropTypes.func.isRequired,
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
