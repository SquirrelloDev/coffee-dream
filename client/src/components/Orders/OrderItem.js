import React from "react";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import SingleItem from "./SingleItem";
import classes from "./OrderItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class OrderItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {expanded: false}
    }
    changeDetailsHandler(){
        const chevron = document.getElementById('chevron');
        if(!chevron.classList.contains(`${classes.chevron}`)){
            chevron.classList.add(`${classes['chevron--active']}`);
        }
        else{
            chevron.classList.remove(`${classes['chevron--active']}`);
        }
        console.log(chevron)
        this.setState({expanded: !this.state.expanded});
    }
    render() {
        return (
            <div className={classes.order}>
                <div className={classes['order__main-info']}>
                    <p>Order:</p>
                    <p>Date:</p>
                    <p>Status:</p>
                    <p>Order value:</p>
                    <p>Details: <FontAwesomeIcon id={'chevron'} icon={this.state.expanded ? faChevronUp : faChevronDown} onClick={this.changeDetailsHandler.bind(this)} className={classes.chevron}/></p>
                </div>
                {this.state.expanded &&
                <div className={classes.order__details}>
                    <p>Billing address:</p>
                    <p>name and last</p>
                    <p>street</p>
                    <p>postal and city</p>
                    <p className={classes.order__details__lastBilling}>Phone: phone</p>
                    <p>Items:</p>
                    <hr/>
                    <SingleItem/>
                    <SingleItem/>
                    <button>Request a refund</button>
                </div>
                }
            </div>
        );
    }
}
export default OrderItem;