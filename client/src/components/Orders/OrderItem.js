import React from "react";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import SingleItem from "./SingleItem";
import classes from "./OrderItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class OrderItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {expanded: false, orderData:{
            id: 0,
            date: Date.now().toLocaleString(),
            status: 'placed',
            orderValue: 0.00,
            billing:{
                name: 'John Doe',
                street: 'Groove str. 33',
                postal: '69-420 Los Santos',
                phone: '53453453'
            },
            orderItems: [{
                name: 'name',
                quantity: 0,
                price: 22.99,
                value: 0
            }]
            }}
    }
    changeDetailsHandler(){
        const chevron = document.getElementById('chevron');
        if(!chevron.classList.contains(`${classes.chevron}`)){
            chevron.classList.add(`${classes['chevron--active']}`);
        }
        else{
            chevron.classList.remove(`${classes['chevron--active']}`);
        }
        this.setState({expanded: !this.state.expanded});
    }
    render() {
        return (
            <div className={classes.order}>
                <div className={classes['order__main-info']}>
                    <p>Order: {this.state.orderData.id}</p>
                    <p>Date: {this.state.orderData.date}</p>
                    <p>Status: {this.state.orderData.status}</p>
                    <p>Order value: {this.state.orderData.orderValue}</p>
                    <p>Details: <FontAwesomeIcon id={'chevron'} icon={this.state.expanded ? faChevronUp : faChevronDown} onClick={this.changeDetailsHandler.bind(this)} className={classes.chevron}/></p>
                </div>
                {this.state.expanded &&
                <div className={classes.order__details}>
                    <p>Billing address:</p>
                    <p>{this.state.orderData.billing.name}</p>
                    <p>{this.state.orderData.billing.street}</p>
                    <p>{this.state.orderData.billing.postal}</p>
                    <p className={classes.order__details__lastBilling}>Phone: {this.state.orderData.billing.phone}</p>
                    <p>Items:</p>
                    <hr/>
                    {/*mapowanie itemów*/}
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