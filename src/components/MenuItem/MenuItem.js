import React from "react";
import PropTypes from "prop-types";
import "./MenuItem.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// Above pending open issue for accessibility improvements.

export function MenuItem({ children, title }) {
    return (
        <div className="menuItem">
            <span className="menuItemTitle">{title}</span>
            <div className="menuItemChildren">{children}</div>
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
