import React from "react";
import classes from "./Input.module.scss";
class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={inputState: {
                stateName: 'NOT-DEFINED',
                stateText: ''
            }}
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

    render() {
        return (
            <React.Fragment>
                {this.props.label && <p>{this.props.label}</p>}
                <input className={`${classes.input}`} type={this.props.type === 'number' ? 'number' : 'text'}/>
                {this.state.inputState.stateName === 'ERROR' && <p className={classes['input__error-text']}>Error text</p>}
            </React.Fragment>
        );
    }
}
export default Input;