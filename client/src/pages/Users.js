import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./Users.module.scss";
import Table from "../components/Tables/Table";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state={modalOpen: false}
    }
    openDetails(){
        this.setState({modalOpen: true});
        //set the user details to local storage
    }
    closeDetails(){
        this.setState({modalOpen: false});
    }

    render() {
        return (
            <main className={classes.users}>
                <BackButton path='/profile' glassZone={25}/>
                <h1>Users</h1>
                <Table openModalFn={this.openDetails.bind(this)}/>
                {this.state.modalOpen && <Modal closeModalFn={this.closeDetails.bind(this)}>
                    <h2>Details: id</h2>
                    <p>First name: </p>
                    <p>Lat name: </p>
                    <p>E-mail: </p>
                    <Button variant={'outline'}>Edit</Button>
                    <Button variant={'outline danger'}>Delete</Button>
                </Modal>}
                <div className={classes.users__padding}></div>
                <Button variant={'fill'}>new user</Button>
            </main>
        );
    }
}
export default Users;