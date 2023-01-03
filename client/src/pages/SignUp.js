import React from "react";
import Input from "../components/UI/inputs/Input";
import Button from "../components/UI/Button";
import classes from "./SignUp.module.scss";
class SignUp extends React.Component{
    render() {
        return (
            <main className={classes.signup}>
                <h1>Getting started</h1>
                <form className={classes['signup-form']}>
                    <Input label={'Name'}/>
                    <Input label={'Last name'}/>
                    <Input label={'E-mail address'}/>
                    <Input label={'Password'}/>
                    <Button variant={'fill'}>Sign up</Button>
                </form>
            </main>
        );
    }
}
export default SignUp;