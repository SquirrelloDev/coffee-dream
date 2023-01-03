import React from "react";
import OrderItem from "./OrderItem";
import classes from "./Orders.module.scss";

class Orders extends React.Component{
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