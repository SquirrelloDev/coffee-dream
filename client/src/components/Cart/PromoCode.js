import Input from "../UI/inputs/Input";
import Button from "../UI/Button";
import React from "react";
import classes from "./PromoCode.module.scss";

class PromoCode extends React.Component{
    constructor(props) {
        super(props);
        this.state={promoValue: ''}
    }

    render() {
        return (
            <div className={classes.promo}>
                <Input placeholder={'Enter promo code'}/>
                <Button variant={'fill'}>Apply</Button>
            </div>
        );
    }
}
export default PromoCode;