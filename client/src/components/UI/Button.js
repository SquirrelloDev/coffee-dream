import React from "react";
import classes from "./Button.module.scss";
class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state={variant: "fill", styles: ''}
    }
    componentDidMount() {
        const variantArr = this.props.variant.split(' ');
        if(variantArr.includes('fill') && !variantArr.includes('outline')){
            if(variantArr.includes('danger')){
                this.setState({styles: `${classes.button} ${classes['button--danger']}`})
            }
            else{
                this.setState({styles: `${classes.button}`})
            }
        }
        else{
            if(variantArr.includes('danger')){
                this.setState({styles: `${classes.button} ${classes['button--outline']} ${classes['button--outline--danger']}`})
            }
            else{
                this.setState({styles: `${classes.button} ${classes['button--outline']}`})
            }
        }

    }

    render() {
        return (
            <button onClick={this.props.behaviorFn} className={this.state.styles} disabled={this.props.disabled ? true : false}>{this.props.children}</button>
        );
    }
}
export default Button;