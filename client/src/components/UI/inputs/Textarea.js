import React from "react";
import classes from "./Input.module.scss";
class Textarea extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                {this.props.label && <p>{this.props.label}</p>}
                <textarea className={classes.textarea}></textarea>
            </React.Fragment>
        );
    }

}
export default Textarea;