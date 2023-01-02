import React from "react";
import Avatar from "./Avatar";
import classes from "../../pages/Profile.module.scss";
import ActionButton from "./ActionButton";
import {faBoxes, faGear, faRightFromBracket, faShield} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ProfileLoggedIn extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className={classes.logged}>
                <Avatar label={'my name'}/>
                <div className={classes.logged__actions}>
                    <ActionButton icon={faBoxes}>Your orders</ActionButton>
                    <ActionButton icon={faGear}>Account settings</ActionButton>
                    <ActionButton icon={faShield}>Manage users</ActionButton>
                    <ActionButton logoutVariant={true} icon={faRightFromBracket}>Log out</ActionButton>
                </div>
                <div className={classes.profile__padding}></div>
            </section>

        );
    }
}
export default ProfileLoggedIn;