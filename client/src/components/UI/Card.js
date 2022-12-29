import React from "react";
import classes from "./Card.module.scss";
class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={classes.card}>
                {this.props.children}
            </div>
        );
    }
}
export default Card;