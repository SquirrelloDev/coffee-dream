import React from "react";
import classes from "./Input.module.scss";
class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inputType: this.props.inputType,
            value: '',
            inputState: {
                stateName: 'NOT-DEFINED',
                stateText: ''
            }}
    }
    setToSuccess(){
        this.setState(prevState => {
            return{
                ...prevState,
                inputState: {
                    stateName: 'SUCCESS',
                    stateText: ''
                }}})
    }
    setToError(errMsg){
        this.setState(prevState => {
            return {
                ...prevState,
                inputState: {
                    stateName: 'ERROR',
                    stateText: errMsg
                }}})
    }
    getInputValue(e){
        this.props.getValue(e.target.value);
    }
    componentDidMount() {
        this.setState({inputType: this.props.type});
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.errStatus !== this.props.errStatus){
            if(this.props.errStatus){
                this.setToError(this.props.errValue);
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.label && <label className={classes.label}>{this.props.label}</label>}
                {this.state.inputType !== 'number' && <input onInput={this.getInputValue.bind(this)} className={this.state.inputState.stateName === 'ERROR' ? `${classes.input} ${classes['input--error']}` : `${classes.input}`} type={this.state.inputType ? this.state.inputType : 'text'} id={this.props.label} placeholder={this.props.placeholder && this.props.placeholder} disabled={this.props.disabled} defaultValue={this.props.defValue}/>}
                {this.state.inputType ==='number' && <input onInput={this.getInputValue.bind(this)} className={this.state.inputState.stateName === 'ERROR' ? `${classes.input} ${classes['input--error']}` : `${classes.input}`} type={this.state.inputType} min={this.props.min} max={this.props.max} id={this.props.label} placeholder={this.props.placeholder && this.props.placeholder} disabled={this.props.disabled} defaultValue={this.props.defValue}/>}
                {this.state.inputState.stateName === 'ERROR' && <p className={classes['input__error-text']}>{this.state.inputState.stateText}</p>}
            </React.Fragment>
        );
    }
}
export default Input;