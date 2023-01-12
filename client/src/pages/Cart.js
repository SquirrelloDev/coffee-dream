import React from "react";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";
import classes from "./Cart.module.scss";
import Summary from "../components/Cart/Summary";
import PromoCode from "../components/Cart/PromoCode";
import CartItem from "../components/Cart/CartItem";
import Modal from "../components/UI/Modal";
import ModalCart from "../components/Cart/ModalCart";
import {CART_CONTEXT} from "../config/global_const";


class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            modalOpen: false,
            cartState: JSON.parse(localStorage.getItem(CART_CONTEXT)), //stan koszyka z localStorage
            itemsValue: 0,
            discountValue: 0,
            discountPrice: 0,
            codeUsed: false
            };
    }
    closeModal(){
        this.setState({modalOpen: false})
    }
    openModal(){
        this.setState({modalOpen: true})
    }
    setCodeUsed(codeValue){
        this.setState({codeUsed: true, discountValue: (codeValue/100)});
    }
    resetCodeUsed(){
        this.setState({codeUsed: false});
    }
    sumUp(){
        const itemsVal = this.state.cartState.items.reduce((previousValue, itemValue) => {
            return previousValue += (itemValue.price * itemValue.QUANTITY);
        }, 0);
        const discountVal = itemsVal * this.state.discountValue;
        localStorage.setItem('totalOrder',JSON.stringify( {totalOrderValue: (itemsVal - discountVal).toFixed(2), appliedDiscountValue: this.state.discountValue}));
        this.setState({itemsValue: itemsVal, discountPrice: discountVal})
    }
    componentDidMount() {
        this.sumUp();
    }
    modifyQuantity(itemId, newQuantity){
        const cartItemIdx = this.state.cartState.items.findIndex(item => item._id === itemId);
        const cartItem = this.state.cartState.items[cartItemIdx];
        let updatedItems;
        const updatedQuantity = {
            ...cartItem,
            QUANTITY: newQuantity
        }
        updatedItems = [...this.state.cartState.items];
        updatedItems[cartItemIdx] = updatedQuantity;
        localStorage.setItem(CART_CONTEXT, JSON.stringify({items: [...updatedItems]}));
        this.setState({cartState: {items: updatedItems}});
        console.log(cartItem, newQuantity);
    }
    removeItemFromCart(itemId){
        let updatedItems;
        updatedItems = this.state.cartState.items.filter(item => item._id !== itemId);
        localStorage.setItem(CART_CONTEXT, JSON.stringify({items: [...updatedItems]}));
        this.setState({cartState: {items: updatedItems}});
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.cartState !== this.state.cartState){
            this.sumUp();
        }
        if((prevState.codeUsed !== this.state.codeUsed) && this.state.codeUsed){
            this.sumUp()
        }
    }

    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <main className={classes.cart}>
                    <h1>My cart</h1>
                    <div className={classes.cart__items}>
                        {this.state.cartState.items.length === 0  && <p>No items in the cart. Go add something!</p>}
                        {this.state.cartState.items.map(item => <CartItem key={item._id} itemData={item} modifyQuantity={this.modifyQuantity.bind(this)} removeItemHandler={this.removeItemFromCart.bind(this)}/>)}
                        {this.state.cartState.items.length === 0 || <PromoCode codeStatus={this.state.codeUsed} setCode={this.setCodeUsed.bind(this)} resetCode={this.resetCodeUsed.bind(this)}/>}
                        <div className={classes.cart__padding}></div>
                    </div>
                <Summary itemsValue={this.state.itemsValue} discountValue={this.state.discountPrice} loginPrompt={this.openModal.bind(this)}/>
                </main>
                <BottomBar/>
                {this.state.modalOpen && <Modal closeModalFn={this.closeModal.bind(this)}><ModalCart/></Modal> }
            </React.Fragment>
        );
    }
}
export default Cart