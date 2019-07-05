import React from "react";
import PropTypes from "prop-types";
import styles from "./MenuItem.module.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// Above pending open issue for accessibility improvements.

export function MenuItem({ children, title }) {
    return (
        <div className={styles.menuItem}>
            <span className={styles.menuItemTitle}>{title}</span>
            <div className={styles.menuItemChildren}>{children}</div>
        </div>
    );
}

MenuItem.defaultProps = {
    children: null,
    title: ""
};

MenuItem.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};
