import React from "react";
import PropTypes from "prop-types";
import styles from "./SidebarItem.module.css";

export function SidebarItem({ children, title }) {
    return (
        <div className={styles.sidebarItem}>
            <span className={styles.sidebarItemTitle}>{title}</span>
            {children}
        </div>
    );
}

SidebarItem.defaultProps = {
    children: null,
    title: ""
};

SidebarItem.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};
