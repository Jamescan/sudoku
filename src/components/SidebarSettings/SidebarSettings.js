import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./SidebarSettings.module.css";

export function SidebarSettings(props) {
    const {
        checkValidSolution,
        currentNotation,
        isInSolveMode,
        isUsingPencilMarks,
        setCurrentNotation,
        toggleEntryMethod,
        toggleShowAllErrors,
        toggleShowObviousErrors
    } = props;
    return (
        <div className={styles.sidebarSettingsWrapper}>
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
                                    //handleClick: toggleEntryMethod,
                                    //isSelected: !isUsingPencilMarks,
                                    handleClick: () => setCurrentNotation("bigNumbers"),
                                    isSelected: currentNotation === "bigNumbers",
                                    title: "Big"
                                },
                                {
                                    additionalClassNames: styles.entryMethodButton,
                                    handleClick: toggleEntryMethod,
                                    //isSelected: isUsingPencilMarks,
                                    handleClick: () => setCurrentNotation("cornerPencilMarks"),
                                    isSelected: currentNotation === "cornerPencilMarks",
                                    title: "Little: Corner"
                                },
                                {
                                    additionalClassNames: styles.entryMethodButton,
                                    handleClick: toggleEntryMethod,
                                    //isSelected: isUsingPencilMarks,
                                    handleClick: () => setCurrentNotation("centralPencilMarks"),
                                    isSelected: currentNotation === "centralPencilMarks",
                                    title: "Little: Central"
                                }
                            ]}
                        />
                    </SidebarItem>
                    <SidebarItem title="Misc.">
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
    checkValidSolution: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    toggleEntryMethod: PropTypes.func.isRequired,
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
