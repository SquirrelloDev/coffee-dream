import React from "react";
import BackButton from "../components/UI/BackButton";
import Orders from "../components/Orders/Orders";
import classes from "./OrdersPage.module.scss";
import TopBar from "../components/navs/TopBar";


class OrdersPage extends React.Component{
    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <main className={classes['orders-main']}>
                    <BackButton path={'/profile'} glassZone={45}/>
                    <h1>My orders</h1>
                    <Orders/>
                </main>
            </React.Fragment>

        );
    }
}
export default OrdersPage;