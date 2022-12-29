import React from "react";
import classes from "./Button.module.scss";
class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state={variant: "fill"}
    }
    static getDerivedStateFromProps(props, state){
        if(props.variant !== state.variant){
            return{
                variant: props.variant
            }
        }
        return null;
    }
    render() {
        return (
            <button onClick={this.props.behaviorFn} className={this.state.variant === 'fill' ? `${classes.button}` : `${classes.button} ${classes['button--outline']}`} disabled={this.props.disabled ? true : false}>{this.props.children}</button>
        );
    }
}
export default Button;