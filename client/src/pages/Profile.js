import React from "react";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";
import classes from "./Profile.module.scss";

import ProfileLoggedOut from "../components/profile/ProfileLoggedOut";
import ProfileLoggedIn from "../components/profile/ProfileLoggedIn";
import {ACCESS_LEVEL} from "../config/global_const";
class Profile extends React.Component{
    render() {
        const currentUser =  JSON.parse(localStorage.getItem('currentUser'));
        return (
            <React.Fragment>
                <TopBar/>
                <main className={classes.profile}>
                    <h1>My account</h1>
                    {currentUser.accessLevel < ACCESS_LEVEL.USER && <ProfileLoggedOut/>}
                    {currentUser.accessLevel >= ACCESS_LEVEL.USER && <ProfileLoggedIn currentUser={currentUser}/>}
                </main>
                <BottomBar/>
            </React.Fragment>
        );
    }
}
export default Profile