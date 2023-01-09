import React from "react";
import classes from "./Input.module.scss";
class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inputType: 'text',
            value: ''}
    }

    getInputValue(e){
        this.props.getValue(e.target.value);
    }
    componentDidMount() {
        this.setState({inputType: this.props.type});
    }
    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <React.Fragment>
                {this.props.label && <label className={classes.label}>{this.props.label}</label>}
                <input onInput={this.getInputValue.bind(this)} className={`${classes.input}`} type={this.state.inputType} id={this.props.label} placeholder={this.props.placeholder && this.props.placeholder} disabled={this.props.disabled} defaultValue={this.props.defValue}/>
                {this.props.status === 'ERROR' && <p className={classes['input__error-text']}>Error text</p>}
            </React.Fragment>
        );
    }
}
export default Input;