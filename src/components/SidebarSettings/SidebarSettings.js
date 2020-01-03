import React from "react";
import PropTypes from "prop-types";
import { ENTRY_METHODS, DIFFICULTY_LEVELS } from "../../constants";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";
import { DifficultySelection } from "../DifficultySelection/DifficultySelection";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./SidebarSettings.module.css";

export function SidebarSettings(props) {
    const {
        clearAllPencilMarks,
        entryMethod,
        getSudoku,
        isInSolveMode,
        isSolved,
        setDifficulty,
        setEntryMethod,
        toggleShowAllErrors,
        toggleShowObviousErrors
    } = props;

    return (
        <aside className={styles.sidebarSettingsWrapper}>
            {!isInSolveMode && (
                <SidebarItem>
                    <button type="button" onClick={getSudoku} className={styles.generateButton}>
                        Generate a New Sudoku
                    </button>
                    <DifficultySelection
                        levels={DIFFICULTY_LEVELS}
                        onChange={({ target: { value } }) => {
                            // FIXME: More elegant method?
                            const level = DIFFICULTY_LEVELS.find(
                                difficulty => Math.abs(difficulty.value - value) < 2
                            );
                            setDifficulty(level.name);
                        }}
                    />
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
                            buttons={Object.values(ENTRY_METHODS).map(method => {
                                return {
                                    handleClick: () => setEntryMethod(method),
                                    isSelected: entryMethod === method,
                                    title: method.charAt(0).toUpperCase() + method.slice(1)
                                };
                            })}
                        />
                    </SidebarItem>
                    <SidebarItem title="Misc.">
                        <ButtonGroup
                            buttons={[
                                {
                                    handleClick: () => clearAllPencilMarks(),

                                    // "Clear All" can always be selected again (never disabled)
                                    isSelected: false,
                                    title: "Clear All Pencil Marks"
                                },
                                {
                                    handleClick: () => {
                                        // eslint-disable-next-line
                                        isSolved ? alert("Looks good") : alert("Not the solution.");
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
        </aside>
    );
}

SidebarSettings.defaultProps = {
    isInSolveMode: false
};

SidebarSettings.propTypes = {
    clearAllPencilMarks: PropTypes.func.isRequired,
    entryMethod: PropTypes.string.isRequired,
    getSudoku: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    isSolved: PropTypes.bool.isRequired,
    setDifficulty: PropTypes.func.isRequired,
    setEntryMethod: PropTypes.func.isRequired,
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
