import React from "react";
import ReactDOM from "react-dom/client";
import BottomBar from "../components/navs/BottomBar";

class Profile extends React.Component{
    render() {
        return (

            <React.Fragment>
               <p>Derek to stary dziad</p>
                <BottomBar/>
            </React.Fragment>
        );
    }
}
export default Profile