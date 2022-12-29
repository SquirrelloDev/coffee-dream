import React from "react";
import Card from "./Card";
import classes from "./HorizontalContainer.module.scss";

class HorizontalContainer extends React.Component{
    render() {
        return (
            <div className={`${classes.container} ${classes['snaps-inline']}`}>
                <Card>T</Card>
                <Card>E</Card>
                <Card>E</Card>
                <Card>E</Card>
            </div>
        );
    }
}
export default HorizontalContainer;