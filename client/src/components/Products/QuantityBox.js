import React from "react";
import classes from "./QuantityBox.module.scss";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class QuantityBox extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count: 1
        }
        this.addQuantity = this.addQuantity.bind(this);
        this.substractQuantity = this.substractQuantity.bind(this);
    }
    addQuantity(){
        if(this.state.count >= 999){
            return;
        }
        this.setState(prevState => ({count: prevState.count + 1,}))
    }
    substractQuantity(){
        if(this.state.count <= 1){
            return;
        }
       this.setState(prevState => ({count: prevState.count -1,}))
    }

    render() {
        return (
            <div className={classes.box}>
                {this.props.labelEnabled && <p className={classes.box__title}>Quantity</p>}
                <div className={classes.box__container}>
                    <button onClick={this.substractQuantity}><FontAwesomeIcon icon={faMinus} size={"lg"}/></button><div>{this.state.count}</div><button onClick={this.addQuantity}><FontAwesomeIcon icon={faPlus} size={"lg"}/></button>
                </div>
            </div>
        );
    }
}
export default QuantityBox;