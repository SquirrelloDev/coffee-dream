import {PayPalButtons} from "@paypal/react-paypal-js";
import React from "react";
import Toast from "./UI/Toast";

class PayPalBtn extends React.Component{
    constructor(props) {
        //send product here
        super(props);
        this.state = {paymentCancelled: false, paymentError: false, mgs: ''}
    }
    handleApprove(){
        //call backend
    }
    handleError(){
        this.setState({paymentError: true, msg: 'Something went wrong'});
    }
    handleCancel(){
        this.setState({paymentCancelled: true, msg: 'Payment cancelled by the user'});
    }
    componentDidUpdate(prevProps, prevState) {
        if((prevState.paymentCancelled !== this.state.paymentCancelled) && this.state.paymentCancelled){
            let toastTimeout = setTimeout(()=>{
                this.setState({paymentCancelled: false, msg: ''})
            }, 3100)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if((prevState.paymentError !== this.state.paymentError) && this.state.paymentError){
            let toastTimeout = setTimeout(()=>{
                this.setState({paymentError: false, msg:''});
            }, 3100)
        }
    }

    render() {
        return (
            <React.Fragment>
            <PayPalButtons style={{layout: 'vertical', color:'blue'}}
            createOrder={(data,actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: 'Whole order as one payment',
                            amount:{
                                value: '45.23'
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("Your order:", order);
                console.log("Your data: ", data);
            }}
            onError={this.handleError.bind(this)}
             onCancel={this.handleCancel.bind(this)}
            />
                {(this.state.paymentCancelled || this.state.paymentError) && <Toast>{this.state.msg}</Toast>}
            </React.Fragment>
        );
    }

}
export default PayPalBtn;