import React from "react";
import PropTypes from "prop-types";
import "./SolutionCheckingGroup.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// Above pending open issue for accessibility improvements.

// TODO: Component should be reusable,
// consider combining with ButtonGroup into MenuGroupItem or something.
export function SolutionCheckingGroup({ toggleShowAllErrors, toggleShowObviousErrors }) {
    return (
        <div className="checkboxGroupWrapper">
            <label>Highlight Mistakes?</label>
            <div>
                <input
                    type="checkbox"
                    id="obviousErrors"
                    onChange={() => toggleShowObviousErrors()}
                />
                <label htmlFor="obviousErrors">Obvious Errors Only</label>
            </div>
            <div>
                <input type="checkbox" id="allErrors" onChange={() => toggleShowAllErrors()} />
                <label htmlFor="allErrors">All Errors</label>
            </div>
        </div>
    );
}

SolutionCheckingGroup.propTypes = {
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
