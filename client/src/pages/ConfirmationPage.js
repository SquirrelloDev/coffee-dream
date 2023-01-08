import React from "react";
import Confirmation from "./Confirmation";
import {CART_CONTEXT} from "../config/global_const";

class ConfirmationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={fromPayment: false}
    }
    componentDidMount() {
        if(this.props.location.query === 'payment'){
            localStorage.removeItem(CART_CONTEXT);
            localStorage.removeItem('totalOrder');
            this.setState({fromPayment: true});
        }
    }

    render() {
        return (
            <React.Fragment>
                <Confirmation btnLabel={this.state.fromPayment ? 'Come back to home page' : 'Browse'}>
                    {this.state.fromPayment && (
                        <React.Fragment>
                        <h1>Thank you for your shopping</h1>
                        <p>We will send you invoice via email</p>
                        <p>Hope you will be satisfied</p>
                        </React.Fragment>)
                    }
                    {this.state.fromPayment || (
                        <React.Fragment>
                            <h1>You're good to go</h1>
                            <p>Dive into world of tasteful coffees</p>
                        </React.Fragment>
                    )}
                </Confirmation>
            </React.Fragment>
        );
    }
}
export default ConfirmationPage