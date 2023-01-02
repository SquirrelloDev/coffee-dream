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
                <p>$69.00</p>
                <p>Discounts</p>
                <p>$2.00</p>
                <h4>Total</h4>
                <h4 className={classes.summary__total}><span>$</span>67.00</h4>
                <Button variant={'fill'}>Checkout</Button>
            </div>
        );
    }
}
export default Summary;