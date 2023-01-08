import {PayPalButtons} from "@paypal/react-paypal-js";
import React from "react";
import Toast from "./UI/Toast";
import {CART_CONTEXT} from "../config/global_const";

class PayPalBtn extends React.Component{
    constructor(props) {
        //send product here
        super(props);
        this.state = {paymentCancelled: false, paymentError: false, msg: '',
        cartState: JSON.parse(localStorage.getItem(CART_CONTEXT)),
        purchaseUnits: []}
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
    componentDidMount() {
        console.log(this.props.orderValue);
        const units = this.state.cartState.items.map(item => {
            return{
                reference_id: item._id,
                description: item.name,
                amount: {
                    currency_code: 'USD',
                    value: ((item.price * item.QUANTITY) * (1-this.props.orderValue.appliedDiscountValue)).toFixed(2)
                }
            }
        })
        this.setState({purchaseUnits: [...units]});
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
                    intent: 'CAPTURE',
                    // purchase_units: [
                    //     {
                    //         reference_id: '12345',
                    //         description: 'Whole order as one payment',
                    //         amount:{
                    //             value: this.props.orderValue
                    //         }
                    //     },
                    //     {
                    //         reference_id: '4321',
                    //         description: 'dsfsf',
                    //         amount: {
                    //             value: '50.00'
                    //         }
                    //     }
                    // ]
                    purchase_units: [...this.state.purchaseUnits]

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