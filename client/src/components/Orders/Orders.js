import React from "react";
import OrderItem from "./OrderItem";
import classes from "./Orders.module.scss";
import axios from "axios";
import {SERVER_PATH} from "../../config/global_const";

class Orders extends React.Component{
    constructor(props) {
        super(props);
        this.state={currentUser: JSON.parse(localStorage.getItem('currentUser')), orders:[]}
    }
    resetOrders(){
        this.setState({orders: []});
    }
    componentDidMount() {
        axios.get(`${SERVER_PATH}/orders/${this.state.currentUser._id}`).then(res=> this.setState({orders: [...res.data]}))
            .catch(err=> console.log(err));
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.orders !== this.state.orders){
            axios.get(`${SERVER_PATH}/orders/${this.state.currentUser._id}`).then(res=> this.setState({orders: [...res.data]}))
                .catch(err=> console.log(err));
        }
    }

    render() {
        return (
            <section className={classes['order-list']}>
                {this.state.orders.map(order => <OrderItem resetOrderHandler={this.resetOrders.bind(this)} key={order._id} orderObj={order}/>)}
            </section>
        );
    }
}
export default Orders;