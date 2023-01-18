import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./Shipment.module.scss";
import Input from "../components/UI/inputs/Input";
import PayPalBtn from "../components/PayPalBtn";
import {Redirect} from "react-router-dom";
class Shipment extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            redirectToHome: false,
            customerData:{
                name: '',
                lastName: '',
                phone: '',
                street: '',
                postal: '',
                city: ''
            },
            totalOrderValue: JSON.parse(localStorage.getItem('totalOrder')),
            btnsAvailable: false}
    }
    setName(inputText){
        this.setState(prevState => {
            return {customerData: {...prevState.customerData, name: inputText}}
        });
    }
    setLastName(inputText){
        this.setState(prevState =>{
            return {customerData: {...prevState.customerData, lastName: inputText}}
        } );
    }
    setPhone(inputText){
        this.setState(prevState => {
            return {customerData: {...prevState.customerData, phone: inputText}}
        });
    }
    setStreet(inputText){
        this.setState(prevState => {
            return {customerData: {...prevState.customerData, street: inputText}}
        });
    }
    setPostal(inputText){
        this.setState(prevState =>{
            return {customerData: {...prevState.customerData, postal: inputText}}
        } );
    }
    setCity(inputText){
        this.setState(prevState => {
            return {customerData: {...prevState.customerData, city: inputText}}
        });
    }
    checkFormValidation(){
        for (const customerDataKey in this.state.customerData) {
            if(this.state.customerData[customerDataKey] === ''){
                return;
            }
        }
        this.setState({btnsAvailable: true})
    }
    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cartItems'));
        console.log(cart);
        if((cart && cart.items.length === 0) || !cart){
            this.setState({redirectToHome: true})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.customerData !== this.state.customerData){
            this.checkFormValidation();
        }
    }

    render() {
        return (
            <main className={classes.shipment}>
                {this.state.redirectToHome && <Redirect to={'/home'}/>}
                <BackButton path='/cart' glassZone={40}/>
                <h1>Shipment details</h1>
                <form className={classes.shipment__inputs}>
                    <Input getValue={this.setName.bind(this)} label={'Name'}/>
                    <Input getValue={this.setLastName.bind(this)} label={'Last name'}/>
                    <Input getValue={this.setPhone.bind(this)} label={'Phone number'}/>
                    <Input getValue={this.setStreet.bind(this)} label={'Street'}/>
                    <Input getValue={this.setPostal.bind(this)} label={'Postal code'}/>
                    <Input getValue={this.setCity.bind(this)} label={'City'}/>
                </form>
                {this.state.btnsAvailable && <PayPalBtn orderValue={this.state.totalOrderValue} customerData={this.state.customerData}/>}
            </main>
        );
    }
}
export default Shipment