import React from "react";
import ReactDOM from "react-dom/client";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";

class Profile extends React.Component{
    render() {
        return (

            <React.Fragment>
                <TopBar/>
               <p>Derek to stary dziad</p>
                <BottomBar/>
            </React.Fragment>
        );
    }
}
export default Profile