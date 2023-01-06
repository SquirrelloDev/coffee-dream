import React from "react";
import Button from "./Button";
import classes from "./WarningPrompt.module.scss";

class WarningPrompt extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={classes['warning-prompt']}>
                <h2>Warning!</h2>
                <p>You are going to delete item with id: id</p>
                <p>Item and it's data will be removed from database</p>
                <p>Are you wish to proceed?</p>
                <Button variant={'outline danger'}>Delete anyway</Button>
            </div>
        );
    }
}
export default WarningPrompt