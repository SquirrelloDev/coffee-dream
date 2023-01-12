import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./Users.module.scss";
import Table from "../components/Tables/Table";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
import WarningPrompt from "../components/UI/WarningPrompt";
import axios from "axios";
import {SERVER_PATH} from "../config/global_const";
class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state={modalOpen: false, dangerPrompt: false, users:[], userIdx: 0}
    }
    openDetails(idx){
        this.setState({modalOpen: true, userIdx: idx});
        //set the user details to local storage
    }
    closeDetails(){
        this.setState({modalOpen: false, dangerPrompt: false});
    }

    componentDidMount() {
        //fetchowaniie wszystkich userów
        axios.get(`${SERVER_PATH}/users`).then(res => this.setState({users: res.data})).catch(err => console.log(err));
    }

    render() {
        return (
            <main className={classes.users}>
                <BackButton path='/profile' glassZone={25}/>
                <h1>Users</h1>
                <Table users={this.state.users} openModalFn={this.openDetails.bind(this)}/>
                {(this.state.modalOpen && !this.state.dangerPrompt) && <Modal closeModalFn={this.closeDetails.bind(this)}>
                    <h2>Details:</h2>
                    <p>Id: {this.state.users[this.state.userIdx]._id}</p>
                    <p>First name: {(this.state.users[this.state.userIdx].name).split(' ')[0]} </p>
                    <p>Last name: {(this.state.users[this.state.userIdx].name).split(' ')[1]}</p>
                    <p>E-mail: {this.state.users[this.state.userIdx].email} </p>
                    <Button behaviorFn={() => this.setState({dangerPrompt: true})} variant={'outline danger'}>Delete</Button>
                </Modal>}
                {(this.state.modalOpen && this.state.dangerPrompt) && <Modal closeModalFn={this.closeDetails.bind(this)}>
                    <WarningPrompt/>
                </Modal>}
            </main>
        );
    }
}
export default Users;