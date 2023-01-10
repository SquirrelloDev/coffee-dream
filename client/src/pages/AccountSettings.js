import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./AccountSettings.module.scss";
import Input from "../components/UI/inputs/Input";
import Avatar from "../components/profile/Avatar";
import Button from "../components/UI/Button";
import axios from "axios";
import {SERVER_PATH} from "../config/global_const";
class AccountSettings extends React.Component{
    constructor(props) {
        super(props);
        this.state={changeMailActive: false, changePasswdActive: false,
            id: (JSON.parse(localStorage.getItem('currentUser')))._id,
            name: ((JSON.parse(localStorage.getItem('currentUser'))).name).split(' ')[0],
            lastName: ((JSON.parse(localStorage.getItem('currentUser'))).name).split(' ')[1],
            mail: (JSON.parse(localStorage.getItem('currentUser'))).email,
            passwd: (JSON.parse(localStorage.getItem('currentUser'))).password,
            accessLevel: (JSON.parse(localStorage.getItem('currentUser'))).accessLevel,
            mailConfirm:'',
            passwdConfirm: '',
            newImage: null,
            nameErr: false, lastErr: false, mailErr: false, passwdErr:false}
    }
    activateMailHandler(){
        this.setState({changeMailActive: true});
    }
    deactivateMailHandler(){
        this.setState({changeMailActive: false});
    }
    activatePasswordHandler(){
        this.setState({changePasswdActive: true});
    }
    deactivatePasswordHandler(){
        this.setState({changePasswdActive: false});
    }
    setName(inputText){
        this.setState({name: inputText});
    }
    setLastName(inputText){
        this.setState({lastName: inputText});
    }
    setMail(inputText){
        this.setState({mail: inputText});
    }
    setConfirmMail(inputText){
        this.setState({mailConfirm: inputText});
    }
    setPassword(inputText){
        this.setState({passwd: inputText});
    }
    setConfirmPassword(inputText){
        this.setState({passwdConfirm: inputText});
    }
    validateBasicInfo(e){
        e.preventDefault();
        let nameIsInvalid = true;
        let lastNameIsInvalid = true;
        if(this.state.name !== ''){
            nameIsInvalid = false;
        }
        if(this.state.lastName !==''){
            lastNameIsInvalid = false;
        }
        if(!nameIsInvalid && !lastNameIsInvalid){
            //put data
            const formData = new FormData();
            formData.append('name', `${this.state.name} ${this.state.lastName}`);
            formData.append('email', this.state.mail);
            formData.append('password', this.state.passwd);
            formData.append('accessLevel', this.state.accessLevel);
            formData.append("profilePhoto", this.state.newImage);
            // const updateUserObj = {
            //     name: `${this.state.name} ${this.state.lastName}`,
            //     email: 'fghffgh@dfdfg.com',
            //     password: '1234567890',
            //     accessLevel: 1,
            //
            // }
            axios.put(`${SERVER_PATH}/users/${this.state.id}`, formData,{headers: {"Content-type": "multipart/form-data"}}).then(res=>console.log(res))
        }

    }
    validateMail(e){
        e.preventDefault();

    }
    validatePassword(e){
        e.preventDefault();

    }

    render() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const defaultCredentials = <React.Fragment>
            <Input label={'E-mail address'} defValue={currentUser.email} disabled={true}/>
            <button onClick={this.activateMailHandler.bind(this)} className={classes.settings__credentials__change}>Change</button>
            <Input label={'Password'} type={'password'} defValue={currentUser.password} disabled={true}/>
            <button onClick={this.activatePasswordHandler.bind(this)} className={classes.settings__credentials__change}>Change</button>
        </React.Fragment>
        const emailCredentials = <form onSubmit={this.validateMail.bind(this)} className={classes['settings__credential-form']}>
            <Input getValue={this.setMail.bind(this)} label={'New email address'}/>
            <Input getValue={this.setConfirmMail.bind(this)} label={'Confirm email address'}/>
            <Button type={'submit'} variant={'fill'}>Save</Button>
        </form>
        const passwdCredentials = <form onSubmit={this.validatePassword.bind(this)} className={classes['settings__credential-form']}>
            <Input getValue={this.setPassword.bind(this)} label={'New password'}/>
            <p>New password should contain at least 8 characters</p>
            <Input getValue={this.setConfirmPassword.bind(this)} label={'Confirm password'}/>
            <Button type={'submit'} variant={'fill'}>Save</Button>
        </form>

        return (
            <main className={classes.settings}>
                <BackButton path='/profile' glassZone={20}/>
                <h1>Account settings</h1>
                <h3>Basic information</h3>
                <form onSubmit={this.validateBasicInfo.bind(this)} className={classes['settings__basic-form']}>
                    <Input getValue={this.setName.bind(this)} label={'First name'} defValue={(currentUser.name).split(' ')[0]}/>
                    <Input getValue={this.setLastName.bind(this)} label={'Last name'} defValue={(currentUser.name).split(' ')[1]}/>
                    <h3>Avatar</h3>
                    <div className={classes['settings__avatar-box']}>
                        <Avatar/>
                        <input type={'file'} onChange={(e) => this.setState({newImage: e.target.files[0]})} name={'photoFile'}/>
                        <Button variant={'outline danger'}>Delete</Button>
                    </div>
                    <Button type={'submit'} variant={'fill'}>Save</Button>
                </form>
                <h3>Credentials change</h3>
                <div className={classes.settings__credentials}>
                    {(!this.state.changeMailActive && !this.state.changePasswdActive) && defaultCredentials}
                    {this.state.changeMailActive && emailCredentials}
                    {this.state.changePasswdActive && passwdCredentials}
                </div>
                <div className={classes.settings__deletion}>
                    <h3>Account deletion</h3>
                    <p className={classes.settings__deletion__text}>Are you really want to abandon us? Well... it is your decision and we never try to convince to staying with us. Although, you will lose access to your orders, addresses and newsletter.  Your data will be removed</p>
                    <p className={classes.settings__deletion__warning}>This action is inevitable!</p>
                    <Button variant={'fill danger'}>Delete account</Button>
                </div>
            </main>
        );
    }
}
export default AccountSettings;