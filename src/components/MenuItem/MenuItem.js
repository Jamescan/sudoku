import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./MenuItem.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// Above pending open issue for accessibility improvements.

export function MenuItem({title, children}) {
    return (
        <div className="menuItem">
            <span className="menuItemTitle">{title}</span>
            <div className="menuItemChildren">{children}</div>
        </div>
    );
}

MenuItem.defaultProps = {
};

MenuItem.propTypes = {

};
