import Button from "../UI/Button";
import React from "react";
import classes from "./Table.module.scss";
import Modal from "../UI/Modal";
class TableRow extends React.Component{
    constructor(props) {
        super(props);

    }
    openDetails(){
        this.props.openModalFn();
    }
    closeDetails(){

    }
    //TO DO: ADD TRIMMING MECHANISM FOR MAIL AND NAME on RESIZE
    render() {
        return (
            <tr className={classes.row}>
                <td>129</td><td>Derek..</td><td>admin@exam..</td><td><Button behaviorFn={this.openDetails.bind(this)} variant={'fill'}>Details</Button></td>
            </tr>

        );
    }
}
export default TableRow;