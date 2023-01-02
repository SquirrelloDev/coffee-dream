import React from "react";
import classes from "./ProfilePerk.module.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ProfilePerk extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={classes.perk}>
                <FontAwesomeIcon icon={this.props.icon} size={"3x"} fixedWidth={true} className={classes.perk__icon}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
export default ProfilePerk