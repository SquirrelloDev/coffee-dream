import React from "react";
import Input from "../components/UI/inputs/Input";
import Button from "../components/UI/Button";
import classes from "./SignUp.module.scss";
import Toast from "../components/UI/Toast";
class LogIn extends React.Component{
    render() {
        return (
            <main className={classes.signup}>
                <h1>Welcome back</h1>
                <form className={classes['signup-form']}>
                    <Input label={'E-mail address'}/>
                    <Input label={'Password'}/>
                    <Button variant={'fill'}>Log in</Button>
                </form>
                <Toast> Incorrect password</Toast>
            </main>
        );
    }
}
export default LogIn;