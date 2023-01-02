import React from "react";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";
import classes from "./Cart.module.scss";
import Summary from "../components/Cart/Summary";
import PromoCode from "../components/Cart/PromoCode";
import CartItem from "../components/Cart/CartItem";
import Modal from "../components/UI/Modal";
import ModalCart from "../components/Cart/ModalCart";


class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state={modalOpen: true};
    }
    closeModal(){
        this.setState({modalOpen: false})
    }
    openModal(){
        this.setState({modalOpen: true})
    }
    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <main className={classes.cart}>
                    <h1>My cart</h1>
                    <div className={classes.cart__items}>
                        {/*<p>No items in the cart. Go add something!</p>*/}
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <PromoCode/>
                        <div className={classes.cart__padding}></div>
                    </div>
                <Summary/>
                </main>
                <BottomBar/>
                {this.state.modalOpen && <Modal closeModalFn={this.closeModal.bind(this)}><ModalCart/></Modal> }
            </React.Fragment>
        );
    }
}
export default Cart