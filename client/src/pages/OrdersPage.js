import React from "react";
import BackButton from "../components/UI/BackButton";
import Orders from "../components/Orders/Orders";
import classes from "./OrdersPage.module.scss";
import TopBar from "../components/navs/TopBar";
import {Redirect} from "react-router-dom";
import {ACCESS_LEVEL} from "../config/global_const";


class OrdersPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={redirectToHome: false}
    }
    componentDidMount() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if((currentUser && currentUser.accessLevel < ACCESS_LEVEL.USER) || !currentUser){
            this.setState({redirectToHome: true});
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.redirectToHome && <Redirect to={'/home'}/>}
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