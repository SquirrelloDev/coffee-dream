import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./Shipment.module.scss";
import Input from "../components/UI/inputs/Input";

class Shipment extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className={classes.shipment}>
                <BackButton path='/cart' glassZone={40}/>
                <h1>Shipment details</h1>
                <div className={classes.shipment__inputs}>
                    <Input label={'Name'}/>
                    <Input label={'Last name'}/>
                    <Input label={'Phone number'}/>
                    <Input label={'Street'}/>
                    <Input label={'Postal code'}/>
                    <Input label={'City'}/>
                </div>

            </main>
        );
    }
}
export default Shipment