import React, {Component} from "react";
import classes from "./BottomBar.module.scss";
import NavBtn from "./NavBtn";
import {Link} from "react-router-dom";
class BottomBar extends Component{
    render() {
        return(
            <nav className={classes['bottom-bar']}>
                <Link to='/home'><NavBtn icon="home"/></Link>
                <Link to='/cart'><NavBtn icon="cart"/></Link>
                <Link to='/profile'><NavBtn icon="user"/></Link>
            </nav>
        )
    }
}
export default BottomBar;