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
                <tr><th>Name</th><th>Mail</th><th>Actions</th></tr>
                </thead>
                <tbody>
                {this.props.users.map((userObj,idx) =><TableRow key={userObj._id} idx={idx} userData={userObj} openModalFn={this.props.openModalFn}/>)}
                </tbody>
            </table>
        );
    }
}
export default Table