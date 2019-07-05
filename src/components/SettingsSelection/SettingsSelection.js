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

    render() {
        const { isUsingPencilMarks, toggleEntryMethod } = this.props;
        return (
            <div className={styles.settingsSelection}>
                <MenuItem title="Highlight Mistakes?">
                    <SolutionCheckingGroup />
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
                                //isSelected: shouldHighlightIncorrectPencilMarks, // todo
                                title: "Highlight Incorrect"
                            }
                        ]}
                    />
                </MenuItem>
            </div>
        );
    }
}
SettingsSelection.defaultProps = {
    isUsingPencilMarks: false
};

SettingsSelection.propTypes = {
    isUsingPencilMarks: PropTypes.bool,
    toggleEntryMethod: PropTypes.func.isRequired
};
