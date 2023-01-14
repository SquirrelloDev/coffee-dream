import Button from "../UI/Button";
import React from "react";
import classes from "./Table.module.scss";
class TableRow extends React.Component{
    constructor(props) {
        super(props);
        this.state={name: this.props.userData.name, email: this.props.userData.email}
    }
    openDetails(){
        this.props.openModalFn(this.props.idx);
    }

    render() {
        return (
            <tr className={classes.row}>
                <td>{this.state.name}</td><td>{this.state.email}</td><td><Button behaviorFn={this.openDetails.bind(this)} variant={'fill'}>Details</Button></td>
            </tr>

        );
    }
}
export default TableRow;