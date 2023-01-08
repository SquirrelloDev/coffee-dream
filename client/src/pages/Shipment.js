import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./Shipment.module.scss";
import Input from "../components/UI/inputs/Input";
import {PAYPAL_SANDBOX} from "../config/global_const";
import PayPalBtn from "../components/PayPalBtn";
class Shipment extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name: '',
            lastName: '',
            phone: '',
            street: '',
            postal: '',
            city: '',
            totalOrderValue: JSON.parse(localStorage.getItem('totalOrder'))}
    }
    setName(inputText){
        this.setState({name: inputText});
    }
    setLastName(inputText){
        this.setState({lastName: inputText});
    }
    setPhone(inputText){
        this.setState({phone: inputText});
    }
    setStreet(inputText){
        this.setState({street: inputText});
    }
    setPostal(inputText){
        this.setState({postal: inputText});
    }
    setCity(inputText){
        this.setState({city: inputText});
    }
    render() {
        return (
            <main className={classes.shipment}>
                <BackButton path='/cart' glassZone={40}/>
                <h1>Shipment details</h1>
                <form className={classes.shipment__inputs}>
                    <Input getValue={this.setName.bind(this)} label={'Name'}/>
                    <Input getValue={this.setLastName.bind(this)} label={'Last name'}/>
                    <Input getValue={this.setPhone.bind(this)} label={'Phone number'}/>
                    <Input getValue={this.setStreet.bind(this)} label={'Street'}/>
                    <Input getValue={this.setPostal.bind(this)} label={'Postal code'}/>
                    <Input getValue={this.setCity.bind(this)} label={'City'}/>

                    <PayPalBtn orderValue={this.state.totalOrderValue}/>
                </form>
            </main>
        );
    }
}
export default Shipment