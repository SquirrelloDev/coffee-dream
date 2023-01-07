import Input from "../UI/inputs/Input";
import Button from "../UI/Button";
import React from "react";
import classes from "./PromoCode.module.scss";
import {PROMO_CODE} from "../../config/global_const";
import Toast from "../UI/Toast";

class PromoCode extends React.Component{
    constructor(props) {
        super(props);
        this.state={promoValue: '', displayToast: false}
    }
    setPromoValue(inputText){
        this.setState({promoValue: inputText})
    }
    checkPromo(){
        if(this.props.codeStatus){
            console.error("KOD UŻYTY!")
            setTimeout(() => this.setState({displayToast: false}), 3500);
            this.setState({displayToast: true})
            return;
        }
        if(this.state.promoValue === PROMO_CODE){
            console.log('KOD GIT!')
            this.props.setCode();
        }
        else{
            console.warn('KOD niepoprawny')
        }
    }
    render() {
        return (
            <div className={classes.promo}>
                <Input getValue={this.setPromoValue.bind(this)} placeholder={'Enter promo code'}/>
                <Button behaviorFn={this.checkPromo.bind(this)} variant={'fill'}>Apply</Button>
                {this.state.displayToast && <Toast> Code already used</Toast>}
            </div>
        );
    }
}
export default PromoCode;