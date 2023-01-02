import React from "react";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";
import classes from "./Cart.module.scss";
import Summary from "../components/Cart/Summary";

class Cart extends React.Component{
    render() {
        return (
            <div>
                <TopBar/>
                <main className={classes.cart}>
                    <h1>My cart</h1>
                    <div className={classes.cart__items}>

                        {/*    promo*/}
                    </div>
                <Summary/>
                </main>
                <BottomBar/>
            </div>
        );
    }
}
export default Cart