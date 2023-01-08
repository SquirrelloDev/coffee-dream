import {PayPalButtons} from "@paypal/react-paypal-js";
import React from "react";
import Toast from "./UI/Toast";
import {CART_CONTEXT, SERVER_PATH} from "../config/global_const";
import axios from "axios";
import {Redirect} from "react-router-dom";

class PayPalBtn extends React.Component{
    constructor(props) {
        //send product here
        super(props);
        this.state = {paymentCancelled: false, paymentError: false, paymentSuccessful: false ,msg: '',
        cartState: JSON.parse(localStorage.getItem(CART_CONTEXT)),
        purchaseUnits: []}
    }
    handleApprove(order){
        const userCredentials = JSON.parse(localStorage.getItem('currentUser'));
        const productsForApi = this.state.cartState.items.map(item => {
            return {
                productId: item._id,
                quantity: item.QUANTITY
            }
        })
        const orderEntry = {
            userId:  userCredentials._id,
            paymentId: order.id,
            products: [...productsForApi],
            total: this.props.orderValue.totalOrderValue,
            address: `${this.props.customerData.name} ${this.props.customerData.lastName} ${this.props.customerData.street}`,
            city: `${this.props.customerData.city}`,
            zipcode: `${this.props.customerData.postal}`
        };
        //call backend
        axios.post(`${SERVER_PATH}/orders`, orderEntry).then(res => this.setState({paymentSuccessful: true})).catch(err => console.log(err));

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
             {this.state.paymentSuccessful && <Redirect to={{pathname: '/success', query:'payment'}}/>}
            <PayPalButtons style={{layout: 'vertical', color:'blue'}}
            createOrder={(data,actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [...this.state.purchaseUnits]

                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                this.handleApprove(order);
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