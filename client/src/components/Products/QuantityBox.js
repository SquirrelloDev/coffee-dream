import React from "react";
import classes from "./QuantityBox.module.scss";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class QuantityBox extends React.Component{
    constructor(props) {
        super(props);
    }
    add(){
        this.props.addHandler();
    }
    subtract(){
        this.props.subtractHandler();
    }

    render() {
        return (
            <div className={classes.box}>
                {this.props.labelEnabled && <p className={classes.box__title}>Quantity</p>}
                <div className={classes.box__container}>
                    <button onClick={this.subtract.bind(this)}><FontAwesomeIcon icon={faMinus} size={"lg"}/></button><div>{this.props.currentQuantity}</div><button onClick={this.add.bind(this)}><FontAwesomeIcon icon={faPlus} size={"lg"}/></button>
                </div>
            </div>
        );
    }
}
export default QuantityBox;