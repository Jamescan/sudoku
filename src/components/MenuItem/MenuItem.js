import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./MenuItem.module.css";

export function MenuItem({ additionalClassNames, children, title }) {
    return (
        <div className={clsx(styles.menuItem, additionalClassNames)}>
            {title && <h3>{title}</h3>}
            {children}
        </div>
    );
}

MenuItem.defaultProps = {
    additionalClassNames: "",
    children: null,
    title: ""
};

MenuItem.propTypes = {
    additionalClassNames: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    children: PropTypes.node,
    title: PropTypes.string
};
