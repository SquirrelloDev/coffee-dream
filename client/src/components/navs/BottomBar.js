import React, {Component} from "react";
import classes from "./BottomBar.module.scss";
import NavBtn from "./NavBtn";
class BottomBar extends Component{
    render() {
        return(
            <div className={classes['bottom-bar']}>
                <NavBtn icon="home"/>
                <NavBtn icon="cart"/>
                <NavBtn icon="user"/>
            </div>
        )
    }
}
export default BottomBar;