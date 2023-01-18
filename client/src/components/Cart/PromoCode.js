import Input from "../UI/inputs/Input";
import Button from "../UI/Button";
import React from "react";
import classes from "./PromoCode.module.scss";
import {SERVER_PATH} from "../../config/global_const";
import Toast from "../UI/Toast";
import axios from "axios";

class PromoCode extends React.Component{
    constructor(props) {
        super(props);
        this.state={promoValue: '', displayToast: false, promoData: []}
    }
    setPromoValue(inputText){
        this.setState({promoValue: inputText})
    }
    checkPromo(){
        if(this.props.codeStatus){
            setTimeout(() => this.setState({displayToast: false}), 3500);
            this.setState({displayToast: true})
            return;
        }
        const promoEntry = this.state.promoData.find(promo => {
            return promo.code === this.state.promoValue;
        })
        if(!promoEntry){
            console.warn('KOD niepoprawny');
            return;
        }
        else{
            console.log('KOD GIT!')
            this.props.setCode(promoEntry.discount);
        }
    }
    componentDidMount() {
        axios.get(`${SERVER_PATH}/promocodes`).then(res => this.setState({promoData: [...res.data]}));
    }
    render() {
        return (
            <div className={classes.promo}>
                <Input getValue={this.setPromoValue.bind(this)} placeholder={'Enter promo code'}/>
                <Button behaviorFn={this.checkPromo.bind(this)} variant={'fill'}>Apply</Button>
                {this.state.displayToast && <Toast> You can use only one code</Toast>}
            </div>
        );
    }
}
export default PromoCode;