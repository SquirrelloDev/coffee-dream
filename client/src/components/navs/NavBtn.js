import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import classes from "./BottomBar.module.scss";
const icons = {
    home: faHouse,
    cart: faCartShopping,
    user: faUser
}
class NavBtn extends Component{
    constructor(props) {
        super(props);
        this.state = {desiredIcon: faHouse}
    }
    componentDidMount() {
            if(Object.keys(icons).includes(this.props.icon)){
               this.setState({desiredIcon: icons[`${this.props.icon}`]})
            }
            else{
                console.error("No icon found!");
            }

    }

    render() {
        return (
            <div>
                <button className={classes.icon__btn}><FontAwesomeIcon icon={this.state.desiredIcon} size="2x" className={classes['icon--highlight']}/></button>
            </div>
        );
    }
}
export default NavBtn;