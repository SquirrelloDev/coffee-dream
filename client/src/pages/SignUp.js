import React from "react";
import Input from "../components/UI/inputs/Input";
import Button from "../components/UI/Button";
import classes from "./SignUp.module.scss";
class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            lastName: '',
            email: '',
            password: '',
            inputState: {
                stateName: 'NOT-DEFINED',
                stateText: ''
            },
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
    setToSuccess(){
        this.setState(prevState => {
            return{
                ...prevState,
                inputState: {
                    stateName: 'SUCCESS',
                    stateText: ''
            }}})
    }
    setToError(errMsg){
        this.setState(prevState => {
        return {
                ...prevState,
                inputState: {
                stateName: 'ERROR',
                stateText: errMsg
            }}})
    }
    loginProcess(e){
        e.preventDefault();

    }
    render() {
        return (
            <main className={classes.signup}>
                <h1>Getting started</h1>
                <form onSubmit={this.loginProcess.bind(this)} className={classes['signup-form']}>
                    <Input getValue={this.setName.bind(this)} label={'Name'}/>
                    <Input getValue={this.setLast.bind(this)} label={'Last name'}/>
                    <Input getValue={this.setMail.bind(this)} label={'E-mail address'}/>
                    <Input status={this.state.inputState.stateName} getValue={this.setPassword.bind(this)} type={'password'} label={'Password'}/>
                    <p>Password should contain at least 8 characters</p>
                    <Button type={'submit'} variant={'fill'}>Sign up</Button>
                </form>
            </main>
        );
    }
}
export default SignUp;