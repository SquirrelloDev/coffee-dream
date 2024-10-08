import React from "react";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import SingleItem from "./SingleItem";
import classes from "./OrderItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {SERVER_PATH} from "../../config/global_const";

class OrderItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {expanded: false, orderData:{
            id: this.props.orderObj.orderId,
            status: this.props.orderObj.status,
            orderValue: this.props.orderObj.total,
            billing:{
                name: '',
                street: '',
                postal: ''
            },
                orderItems: [...this.props.orderObj.products],
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
    componentDidMount() {
        const addressArr = this.props.orderObj.address.split(' ');
        this.setState(prevState => {
            return {orderData:{
                    ...prevState.orderData,
                    billing:{
                    name: `${addressArr[0]} ${addressArr[1]}`,
                    street: addressArr[2],
                    postal: `${this.props.orderObj.city} ${this.props.orderObj.zipcode}`
                    }
                }}
        })
    }
    returnOrder(){
        axios.put(`${SERVER_PATH}/orders/refund/${this.props.orderObj._id}`).then(res => this.props.resetOrderHandler());
    }

    render() {

        return (
            <div className={classes.order}>
                <div className={classes['order__main-info']}>
                    <p>Order: {this.state.orderData.id}</p>
                    <p>Status: {this.state.orderData.status}</p>
                    <p>Order value: ${this.state.orderData.orderValue}</p>
                    <p>Details: <FontAwesomeIcon id={'chevron'} icon={this.state.expanded ? faChevronUp : faChevronDown} onClick={this.changeDetailsHandler.bind(this)} className={classes.chevron}/></p>
                </div>
                {this.state.expanded &&
                <div className={classes.order__details}>
                    <p>Billing address:</p>
                    <p>{this.state.orderData.billing.name}</p>
                    <p>{this.state.orderData.billing.street}</p>
                    <p>{this.state.orderData.billing.postal}</p>
                    <p>Items:</p>
                    <hr/>
                    {this.state.orderData.orderItems.map((orderItem, idx) => <SingleItem key={orderItem._id} productObj={orderItem} billingObj={this.state.orderData.billing} prodQuantity={this.props.orderObj.products[idx].quantity}/>)}
                    <button onClick={this.returnOrder.bind(this)}>Request a refund</button>
                </div>
                }
            </div>
        );
    }
}
export default OrderItem;