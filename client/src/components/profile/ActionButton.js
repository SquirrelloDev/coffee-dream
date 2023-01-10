import React from "react";
import classes from "./ActionButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class ActionButton extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <button onClick={this.props.onClick && this.props.onClick.bind(this)} className={!this.props.logoutVariant ? classes.action : `${classes.action} ${classes['action--logout']}`}><FontAwesomeIcon icon={this.props.icon} size={'xl'}/> <span>{this.props.children}</span></button>
        );
    }
}
export default ActionButton;