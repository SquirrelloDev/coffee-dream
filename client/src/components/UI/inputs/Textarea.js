import React from "react";
import classes from "./Input.module.scss";
class Textarea extends React.Component{
    constructor(props) {
        super(props);

    }
    getInputValue(e){
        this.props.getValue(e.target.value);
    }
    render() {
        return (
            <React.Fragment>
                {this.props.label && <p>{this.props.label}</p>}
                <textarea onInput={this.getInputValue.bind(this)} className={classes.textarea}></textarea>
            </React.Fragment>
        );
    }

}
export default Textarea;