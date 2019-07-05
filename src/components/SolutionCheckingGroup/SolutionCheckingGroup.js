import React from "react";
import PropTypes from "prop-types";
import styles from "./SolutionCheckingGroup.module.css";

// TODO: Component should be reusable,
// consider combining with ButtonGroup into MenuGroupItem or something.
export function SolutionCheckingGroup({ toggleShowAllErrors, toggleShowObviousErrors }) {
    return (
        <>
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
        </>
    );
}

SolutionCheckingGroup.propTypes = {
    toggleShowAllErrors: PropTypes.func.isRequired,
    toggleShowObviousErrors: PropTypes.func.isRequired
};
