import React from "react";
import PropTypes from "prop-types";
import styles from "./SettingsSelection.module.css";
import SolutionCheckingGroup from "../SolutionCheckingGroup/SolutionCheckingGroupContainer";
import { MenuItem } from "../MenuItem/MenuItem";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

export class SettingsSelection extends React.PureComponent {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    // TODO: Conditionally render menu items depending on Mode?
    render() {
        const { clearAllCellValues, isInSolveMode, isUsingPencilMarks, toggleAppMode, toggleEntryMethod } = this.props;
        return (
            <div className={styles.settingsSelection}>
                <MenuItem title="Mode">
                    <ButtonGroup
                        buttons={[
                            {
                                //additionalClassNames: styles.entryMethodButton,
                                handleClick: toggleAppMode,
                                isSelected: !isInSolveMode,
                                title: "Capture"
                            },
                            {
                                //additionalClassNames: styles.entryMethodButton,
                                handleClick: toggleAppMode,
                                isSelected: isInSolveMode,
                                title: "Solve"
                            }
                        ]}
                    />
                    {
                        !isInSolveMode &&
                        <button onClick={() => clearAllCellValues()}>Clear All Cells</button>
                    }
                </MenuItem>
                <MenuItem title="Highlight Mistakes?">
                    <SolutionCheckingGroup />
                </MenuItem>
                {isInSolveMode && 
                <>
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
                    <MenuItem title="Pencil Marks">
                        <ButtonGroup
                            buttons={[
                                {
                                    // additionalClassNames: styles.entryMethodButton,
                                    // handleClick: toggleEntryMethod,
                                    isSelected: false, // "Clear All" can always be selected again (never disabled)
                                    title: "Clear All"
                                },
                                {
                                    // additionalClassNames: styles.entryMethodButton,
                                    // handleClick: toggleEntryMethod,
                                    // isSelected: shouldHighlightIncorrectPencilMarks, // todo
                                    title: "Highlight Incorrect"
                                }
                            ]}
                        />
                    </MenuItem>
                </>
                }
            </div>
        );
    }
}
SettingsSelection.defaultProps = {
    isInSolveMode: false,
    isUsingPencilMarks: false
};

SettingsSelection.propTypes = {
    clearAllCellValues: PropTypes.func.isRequired,
    isInSolveMode: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    toggleAppMode: PropTypes.func.isRequired,
    toggleEntryMethod: PropTypes.func.isRequired
};
