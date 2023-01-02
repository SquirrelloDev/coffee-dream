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

    }

    render() {
        return (
            <div className={classes['cart-item']}>
                <button className={classes['cart-item__close']}><FontAwesomeIcon icon={faXmark} fixedWidth={true}/></button>
                <img src={cartImg} className={classes['cart-item__image']}/>
                <h2 className={classes['cart-item__heading']}>Arabica</h2>
                <p className={classes['cart-item__price']}><span>$</span>22,99</p>
                <QuantityCart/>
            </div>
        );
    }
}
export default CartItem;