import React from "react";
import Input from "../components/UI/inputs/Input";
import Button from "../components/UI/Button";
import classes from "./SignUp.module.scss";
import axios from "axios";
import {SERVER_PATH} from "../config/global_const";
import {Redirect} from "react-router-dom";
class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            lastName: '',
            email: '',
            password: '',
            profilePic: null,
            nameErr: false,
            lastErr: false,
            emailErr: false,
            passwordErr: false,
            redirectToLogin: false
        }
    }
    setName(inputText){
        this.setState({name: inputText})
    }
    setLast(inputText){
        this.setState({lastName: inputText})
    }
    setMail(inputText){
        this.setState({email: inputText})
    }
    setPassword(inputText){
       this.setState({password: inputText})
    }
    setProfilePic(e){
        this.setState({profilePic: e.target.files[0]})
    }
     loginProcess(e){
        e.preventDefault();
        let nameIsInvalid=true;
        let lastNameIsInvalid = true;
        let emailIsInvalid= true;
        let passwdIsInvalid = true;
        const emailRegEx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //validation
        if((this.state.name).trim() !== ''){
            nameIsInvalid = false;
        }
        if((this.state.lastName).trim() !== ''){
            lastNameIsInvalid = false;
        }
        if((this.state.email).toLowerCase().match(emailRegEx)){
            emailIsInvalid = false;
        }
        if((this.state.password).length >= 8){
            passwdIsInvalid = false;
        }
        if(!nameIsInvalid && !lastNameIsInvalid && !emailIsInvalid && !passwdIsInvalid){
            //good, send data to server
            console.log('Sending data server');
            const formData = new FormData();
            formData.append("profilePhoto", this.state.profilePic);
            axios.post(`${SERVER_PATH}/users/register/${this.state.name + " " + this.state.lastName}/${this.state.email}/${this.state.password}`, formData, {headers: {"Content-type": "multipart/form-data"}}).catch(err => console.log(err));
            this.setState({nameErr: false, lastErr: false, emailErr: false, passwordErr: false, redirectToLogin: true})
        }
        else{
            this.setState({nameErr: nameIsInvalid, lastErr: lastNameIsInvalid, emailErr: emailIsInvalid, passwordErr: passwdIsInvalid})
        }

    }
    componentDidMount() {
        const user = localStorage.getItem('currentUser');
        if (!user){
            localStorage.setItem('currentUser', JSON.stringify({}));
        }
    }

    render() {
        return (
            <main className={classes.container}>
                <section className={classes.signup}>
                    {this.state.redirectToLogin && <Redirect to={'/login'}/>}
                    <h1>Getting started</h1>
                    <form onSubmit={this.loginProcess.bind(this)} className={classes['signup-form']}>
                        <Input errStatus={this.state.nameErr} errValue={'Name cannot be empty'} getValue={this.setName.bind(this)} label={'Name'}/>
                        <Input errStatus={this.state.lastErr} errValue={'Last name cannot be empty'} getValue={this.setLast.bind(this)} label={'Last name'}/>
                        <Input errStatus={this.state.emailErr} errValue={"This doesn't look like a valid email"} getValue={this.setMail.bind(this)} label={'E-mail address'}/>
                        <Input errStatus={this.state.passwordErr} errValue={'Your password is too short'} getValue={this.setPassword.bind(this)} type={'password'} label={'Password'}/>
                        <p className={classes['signup-form__password']}>Password should contain at least 8 characters</p>
                        <p>Profile photo</p>
                        <input type={'file'} onChange={this.setProfilePic.bind(this)} name={'profilePhoto'}/>
                        <Button type={'submit'} variant={'fill'}>Sign up</Button>
                    </form>
                </section>
                <div className={classes.container__image}></div>
            </main>

        );
    }
}
export default SignUp;