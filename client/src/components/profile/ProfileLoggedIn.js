import React from "react";
import Avatar from "./Avatar";
import classes from "../../pages/Profile.module.scss";
import ActionButton from "./ActionButton";
import {faBoxes, faGear, faRightFromBracket, faShield} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, Redirect} from "react-router-dom";
import {CART_CONTEXT} from "../../config/global_const";

class ProfileLoggedIn extends React.Component{
    constructor(props) {
        super(props);
        this.state={name: this.props.currentUser.name, image: '', logoutRedirect: false}

    }
    logOut(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem(CART_CONTEXT);
        this.setState({logoutRedirect: true});
    }
    render() {
        return (
            <section className={classes.logged}>
                {this.state.logoutRedirect && <Redirect to={'/home'}/>}
                <Avatar label={this.state.name}/>
                <div className={classes.logged__actions}>
                    <Link to='/orders'><ActionButton icon={faBoxes}>Your orders</ActionButton></Link>
                    <ActionButton icon={faGear}>Account settings</ActionButton>
                    <ActionButton icon={faShield}>Manage users</ActionButton>
                    <ActionButton onClick={this.logOut.bind(this)} logoutVariant={true} icon={faRightFromBracket}>Log out</ActionButton>
                </div>
                <div className={classes.profile__padding}></div>
            </section>

        );
    }
}
export default ProfileLoggedIn;