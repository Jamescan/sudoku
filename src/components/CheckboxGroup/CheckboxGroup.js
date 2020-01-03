import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckboxGroup.module.css";

export function CheckboxGroup({ checkboxes, title }) {
    return (
        <>
            <span>{title}</span>
            <div className={styles.checkboxGroupWrapper}>
                {checkboxes.map(({ id, handleSelection, label }) => {
                    return (
                        <label htmlFor={id} key={id}>
                            <input type="checkbox" id={id} onChange={handleSelection} />
                            {label}
                        </label>
                    );
                })}
            </div>
        </>
    );
}

CheckboxGroup.defaultProps = {
    checkboxes: [],
    title: ""
};

CheckboxGroup.propTypes = {
    checkboxes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            handleSelection: PropTypes.func,
            label: PropTypes.string
        })
    ),
    title: PropTypes.string
};
