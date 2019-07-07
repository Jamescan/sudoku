import React from "react";
import PropTypes from "prop-types";
import styles from "./SidebarSettings.module.css";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";
import { SidebarItem } from "../SidebarItem/SidebarItem";

export function SidebarSettings(props) {
    const {
        checkValidSolution,
        isInSolveMode,
        isUsingPencilMarks,
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
                                    label: "Obvious Errors"
                                },
                                {
                                    id: "allErrors",
                                    handleSelection: toggleShowAllErrors,
                                    label: "All Errors"
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
                    </SidebarItem>
                </>
            )}
        </div>
    );
}

SidebarSettings.defaultProps = {};

SidebarSettings.propTypes = {};
