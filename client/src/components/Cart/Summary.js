import React from "react";
import classes from "./Summary.module.scss";
import Button from "../UI/Button";
import {ACCESS_LEVEL} from "../../config/global_const";
class Summary extends React.Component{
    constructor(props) {
        super(props);

    }
    checkUserRole(){
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser.accessLevel > ACCESS_LEVEL.USER){
            this.props.loginPrompt();
            return;
        }

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
                <Button behaviorFn={this.checkUserRole.bind(this)} variant={'fill'}>Checkout</Button>
            </div>
        );
    }
}
export default Summary;