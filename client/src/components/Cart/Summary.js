import React from "react";
import classes from "./Summary.module.scss";
import Button from "../UI/Button";
class Summary extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className={classes.summary}>
                <p>Items</p>
                <p>${(this.props.itemsValue).toFixed(2)}</p>
                <p>Discounts</p>
                <p>${(this.props.discountValue).toFixed(2)}</p>
                <h4>Total</h4>
                <h4 className={classes.summary__total}><span>$</span>{(this.props.itemsValue - this.props.discountValue).toFixed(2)}</h4>
                <Button variant={'fill'}>Checkout</Button>
            </div>
        );
    }
}
export default Summary;