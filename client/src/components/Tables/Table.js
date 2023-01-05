import React from "react";
import classes from "./Table.module.scss";
import Button from "../UI/Button";
import TableRow from "./TableRow";
class Table  extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <table className={classes.table}>
                <thead>
                <tr><th>Id</th><th>Name</th><th>Mail</th><th>Actions</th></tr>
                </thead>
                <tbody>
                <TableRow openModalFn={this.props.openModalFn}/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                </tbody>
            </table>
        );
    }
}
export default Table