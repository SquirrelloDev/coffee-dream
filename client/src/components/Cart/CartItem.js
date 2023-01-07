import React from "react";
import classes from "./CartItem.module.scss";
import QuantityBox from "../Products/QuantityBox";
import cartImg from "../../img/coffebag1.png"
import QuantityCart from "./QuantityCart";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class CartItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={productData: this.props.itemData}
    }
    addQuantity(){
        if(this.state.productData.QUANTITY >= 999){
            return;
        }
        this.setState(prevState => ({productData:{...prevState.productData, QUANTITY: prevState.productData.QUANTITY + 1 }}))
    }
    substractQuantity(){
        if(this.state.productData.QUANTITY <= 1){
            return;
        }
        this.setState(prevState => ({productData:{...prevState.productData, QUANTITY: prevState.productData.QUANTITY - 1 }}))
    }
    removeItem(){
        this.props.removeItemHandler(this.state.productData._id);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.productData.QUANTITY !== this.state.productData.QUANTITY){
            this.props.modifyQuantity(this.state.productData._id, this.state.productData.QUANTITY);
        }
    }

    render() {
        return (
            <div className={classes['cart-item']}>
                <button onClick={this.removeItem.bind(this)} className={classes['cart-item__close']}><FontAwesomeIcon icon={faXmark} fixedWidth={true}/></button>
                <img src={cartImg} className={classes['cart-item__image']}/>
                <h2 className={classes['cart-item__heading']}>{this.state.productData.name}</h2>
                <p className={classes['cart-item__price']}><span>$</span>{(this.state.productData.price * this.state.productData.QUANTITY).toFixed(2)}</p>
                <QuantityCart quantity={this.state.productData.QUANTITY} addHandler={this.addQuantity.bind(this)} subtractHandler={this.substractQuantity.bind(this)}/>
            </div>
        );
    }
}
export default CartItem;