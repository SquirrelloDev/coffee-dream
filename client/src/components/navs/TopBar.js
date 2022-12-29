import React from "react";
import classes from "./TopBar.module.scss";
import {faHouse, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class TopBar extends React.Component{
    render() {
        return (
            <nav className={classes.nav}>
                <p className={classes.company}>Coffee Inc.</p>
                <div className={classes.links}>
                    <Link to='/home' className={classes.link}> <FontAwesomeIcon icon={faHouse} size={'xl'}/><span>Home</span></Link>
                    <Link to='/cart' className={classes.link}><FontAwesomeIcon icon={faCartShopping} size={'xl'}/><span>Cart</span></Link>
                    <Link to='/profile' className={classes.link}><FontAwesomeIcon icon={faUser} size={'xl'}/><span>Profile</span></Link>
                </div>
            </nav>
        );
    }
}
export default TopBar