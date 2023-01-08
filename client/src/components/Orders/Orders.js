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

    componentDidMount() {
        //fetchowanie orderów wszystkich dla usera
        axios.get(`${SERVER_PATH}/orders/${this.state.currentUser._id}`).then(res=> console.log(res.data.result))
            .then()
            .catch(err=> console.log(err));
    }

    render() {
        return (
            <section className={classes['order-list']}>
                <OrderItem/>
                <OrderItem/>
            </section>
        );
    }
}
export default Orders;