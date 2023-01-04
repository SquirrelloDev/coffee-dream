import React from "react";
import classes from "./Input.module.scss";
class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={inputState: {
                stateName: 'NOT-DEFINED',
                stateText: ''
            }, inputType: 'text'}
    }
    setToSuccess(){
        this.setState({inputState: {
                stateName: 'SUCCESS',
                stateText: ''
            }})
    }
    setToError(errMsg){
        this.setState({inputState: {
                stateName: 'ERROR',
                stateText: errMsg
            }})
    }
    componentDidMount() {
        this.setState({inputType: this.props.type});
    }

    render() {
        return (
            <React.Fragment>
                {this.props.label && <label className={classes.label}>{this.props.label}</label>}
                <input className={`${classes.input}`} type={this.state.inputType} id={this.props.label} placeholder={this.props.placeholder && this.props.placeholder} disabled={this.props.disabled} defaultValue={this.props.defValue}/>
                {this.state.inputState.stateName === 'ERROR' && <p className={classes['input__error-text']}>Error text</p>}
            </React.Fragment>
        );
    }
}
export default Input;