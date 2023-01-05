import React from "react";
import classes from "./Dropdown.module.scss";

class Dropdown extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
            <label htmlFor={'dropdown'}>User role</label>
            <select id={'dropdown'} className={classes.dropdown}>
                <option>User</option>
                <option>Administrator</option>
            </select>
            </React.Fragment>
        );
    }
}
export default Dropdown;