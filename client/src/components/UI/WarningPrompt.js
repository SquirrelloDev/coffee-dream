import React from "react";
import Button from "./Button";
import classes from "./WarningPrompt.module.scss";
import axios from "axios";
import {SERVER_PATH} from "../../config/global_const";

class WarningPrompt extends React.Component{
    constructor(props) {
        super(props);

    }
    deleteUser(){
        axios.delete(`${SERVER_PATH}/users/${this.props.id}`).then(res => this.props.filterFn(res.data._id)).catch(err => console.log(err))
        this.props.closeModal();
    }

    render() {
        return (
            <div className={classes['warning-prompt']}>
                <h2>Warning!</h2>
                <p>You are going to delete item with id: {this.props.id}</p>
                <p>Item and it's data will be removed from database</p>
                <p>Are you wish to proceed?</p>
                <Button behaviorFn={this.deleteUser.bind(this)} variant={'outline danger'}>Delete anyway</Button>
            </div>
        );
    }
}
export default WarningPrompt