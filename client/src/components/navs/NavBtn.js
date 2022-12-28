import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../../context/app-context";
import classes from "./BottomBar.module.scss";
const icons = {
    home: faHouse,
    cart: faCartShopping,
    user: faUser
}
class NavBtn extends Component{
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {desiredIcon: null}
    }
    componentDidMount() {
            if(Object.keys(icons).includes(this.props.icon)){
               console.log("Exist!");
                console.log(this.context);
               this.setState({desiredIcon: icons[`${this.props.icon}`]})
            }
            else{
                console.error("No icon found!");
            }

    }

    render() {
        return (
            <div>
                <button className={classes.icon__btn}><FontAwesomeIcon icon={this.state.desiredIcon} size="xl" className={classes['icon']}/></button>
            </div>
        );
    }
}
export default NavBtn;