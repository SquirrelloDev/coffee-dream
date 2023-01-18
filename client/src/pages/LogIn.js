import React from "react";
import Input from "../components/UI/inputs/Input";
import Button from "../components/UI/Button";
import classes from "./SignUp.module.scss";
import Toast from "../components/UI/Toast";
import axios from "axios";
import {CART_CONTEXT, GUEST_ID, SERVER_PATH} from "../config/global_const";
import {Redirect} from "react-router-dom";
class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            emailErr: false,
            passwordErr: false,
            redirectToHome: false,
            toastPasswd: false,
        }
    }
    setMail(inputText){
        this.setState({email: inputText})
    }
    setPassword(inputText){
        this.setState({password: inputText, toastPasswd: false})
    }
    validateLogin(e){
        e.preventDefault();
        let emailIsInvalid= true;
        let passwdIsInvalid = true;
        const emailRegEx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //validation
        if((this.state.email).toLowerCase().match(emailRegEx)){
            emailIsInvalid = false;
        }
        if((this.state.password).length !== 0){
            passwdIsInvalid = false;
        }
        if(!emailIsInvalid && !passwdIsInvalid){
            //good, fetch user from server
            axios.post(`${SERVER_PATH}/users/login/${this.state.email}/${this.state.password}`).then(res => {
                if(this.state.password === res.data.password){
                    console.log('correct');
                    if(JSON.parse(localStorage.getItem('currentUser'))._id === GUEST_ID){
                        localStorage.removeItem(CART_CONTEXT);
                    }
                    axios.get(`${SERVER_PATH}/users/${res.data.id}`).then(response => {
                        console.log(response.data);

                        localStorage.setItem('currentUser', JSON.stringify({
                            _id: response.data._id,
                            accessLevel: response.data.accessLevel,
                            name: response.data.name,
                            email: response.data.email,
                            password: response.data.password,
                            profilePhotoFilename: response.data.profilePhoto
                        }));
                        this.setState({redirectToHome: true})
                    });

                }
                else{
                    console.log('incorrect passwrod');
                    this.setState({toastPasswd: true})
                }
            }).catch(err => console.log(err));
        }
        else{

            this.setState({emailErr: emailIsInvalid, passwordErr: passwdIsInvalid})
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
                    {this.state.redirectToHome && <Redirect to={'/home'}/>}
                    <h1>Welcome back</h1>
                    <form onSubmit={this.validateLogin.bind(this)} className={classes['signup-form']}>
                        <Input getValue={this.setMail.bind(this)} errStatus={this.state.emailErr} errValue={"This doesn't look like a valid email"} label={'E-mail address'}/>
                        <Input getValue={this.setPassword.bind(this)} errStatus={this.state.passwordErr} errValue={'Enter password'} label={'Password'} type={'password'}/>
                        <Button type={'submit'} variant={'fill'}>Log in</Button>
                    </form>
                    {this.state.toastPasswd && <Toast>Incorrect password!</Toast>}
                </section>
                <div className={classes.container__image}></div>
            </main>

        );
    }
}
export default LogIn;