import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./EntryMethodButtonGroup.css";

// TODO: Component should be abstracted into a reusable "ButtonGroup"
export function EntryMethodButtonGroup({ isUsingPencilMarks, toggleEntryMethod }) {
    const bigButtonClasses = clsx("entryMethodButton", { selected: !isUsingPencilMarks });
    const littleButtonClasses = clsx("entryMethodButton", { selected: isUsingPencilMarks });
    return (
        <div className="buttonGroupWrapper">
            <label>Entry Method</label>
            <div className="buttonGroup">
                <button
                    className={bigButtonClasses}
                    type="button"
                    onClick={() => toggleEntryMethod()}
                >
                    Big
                </button>
                <button
                    className={littleButtonClasses}
                    type="button"
                    onClick={() => toggleEntryMethod()}
                >
                    Little
                </button>
            </div>
        </div>
    );
}

EntryMethodButtonGroup.defaultProps = {
    isUsingPencilMarks: true
};

EntryMethodButtonGroup.propTypes = {
    isUsingPencilMarks: PropTypes.bool,
    toggleEntryMethod: PropTypes.func.isRequired
};
