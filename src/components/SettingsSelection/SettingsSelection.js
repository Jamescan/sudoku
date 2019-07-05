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
                <MenuItem title="Highlight Mistakes?" />

                <SolutionCheckingGroup />
                <ButtonGroup
                    label="Entry Method"
                    buttons={[
                        {
                            additionalClassNames: styles.entryMethodButton,
                            handleClick: toggleEntryMethod,
                            isCurrentlySelected: !isUsingPencilMarks,
                            title: "Big"
                        },
                        {
                            additionalClassNames: styles.entryMethodButton,
                            handleClick: toggleEntryMethod,
                            isCurrentlySelected: isUsingPencilMarks,
                            title: "Little"
                        }
                    ]}
                />
                {/* TODO: "Pencil Marks" group with buttons for
                "Clear All" and "Highlight Incorrect" */}
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
