import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./AccountSettings.module.scss";
import Input from "../components/UI/inputs/Input";
import Avatar from "../components/profile/Avatar";
import Button from "../components/UI/Button";
class AccountSettings extends React.Component{
    constructor(props) {
        super(props);
        this.state={changeMailActive: false, changePasswdActive: false}
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

    render() {
        const defaultCredentials = <React.Fragment>
            <Input label={'E-mail address'} defValue={'admin@example.com'} disabled={true}/>
            <button onClick={this.activateMailHandler.bind(this)} className={classes.settings__credentials__change}>Change</button>
            <Input label={'Password'} type={'password'} defValue={'supercoolpasswd'} disabled={true}/>
            <button onClick={this.activatePasswordHandler.bind(this)} className={classes.settings__credentials__change}>Change</button>
        </React.Fragment>
        const emailCredentials = <form className={classes['settings__credential-form']}>
            <Input label={'New email address'}/>
            <Input label={'Confirm email address'}/>
            <Button variant={'fill'}>Save</Button>
        </form>
        const passwdCredentials = <form className={classes['settings__credential-form']}>
            <Input label={'New password'}/>
            <p>New password should contain at least 8 characters</p>
            <Input label={'Confirm password'}/>
            <Button variant={'fill'}>Save</Button>
        </form>

        return (
            <main className={classes.settings}>
                <BackButton path='/profile' glassZone={20}/>
                <h1>Account settings</h1>
                <h3>Basic information</h3>
                <form className={classes['settings__basic-form']}>
                    <Input label={'First name'}/>
                    <Input label={'Last name'}/>
                    <h3>Avatar</h3>
                    <div className={classes['settings__avatar-box']}>
                        <Avatar/>
                        <Button variant={'fill'}>Upload</Button>
                        <Button variant={'outline danger'}>Delete</Button>
                    </div>
                    <Button variant={'fill'}>Save</Button>
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