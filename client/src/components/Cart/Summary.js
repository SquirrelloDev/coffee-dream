import React from "react";
import classes from "./Summary.module.scss";
import Button from "../UI/Button";
import {ACCESS_LEVEL} from "../../config/global_const";
import {Link} from "react-router-dom";
class Summary extends React.Component{
    constructor(props) {
        super(props);
        this.state={userLoggedIn: false}

    }
    checkUserRole(){
    this.props.loginPrompt();
    }
    componentDidMount() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser.accessLevel >= ACCESS_LEVEL.USER){
            this.setState({userLoggedIn: true})
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
                {this.state.userLoggedIn ? <Link to={{pathname: `/shipment`}} className={classes.summary__checkout}><Button variant={'fill'} disabled={this.props.itemsValue <= 0 ? true : false}>Checkout</Button></Link> : <Button variant={'fill'} behaviorFn={this.checkUserRole.bind(this)}>Checkout</Button>}
            </div>
        );
    }
}
export default Summary;