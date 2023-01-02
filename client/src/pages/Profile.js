import React from "react";
import ReactDOM from "react-dom/client";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";
import classes from "./Profile.module.scss";

import ProfileLoggedOut from "../components/profile/ProfileLoggedOut";
class Profile extends React.Component{
    render() {
        return (

            <React.Fragment>
                <TopBar/>
                <main className={classes.profile}>
                    <h1>My account</h1>
                    <ProfileLoggedOut/>
                </main>
                {/*<BottomBar/>*/}
            </React.Fragment>
        );
    }
}
export default Profile