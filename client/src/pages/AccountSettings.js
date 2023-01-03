import React from "react";
import BackButton from "../components/UI/BackButton";
import classes from "./AccountSettings.module.scss";
import Input from "../components/UI/inputs/Input";
import Avatar from "../components/profile/Avatar";
import Button from "../components/UI/Button";
class AccountSettings extends React.Component{
    render() {
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
                        <Button variant={'outline'}>Delete</Button>
                    </div>
                    <Button variant={'fill'}>Save</Button>
                </form>
                <h3>Credentials change</h3>
                <div className={classes.settings__credentials}>
                    <Input label={'E-mail address'}/>
                    <button className={classes.settings__credentials__change}>Change</button>
                    <Input label={'Password'}/>
                    <button className={classes.settings__credentials__change}>Change</button>
                </div>
                <div className={classes.settings__deletion}>
                    <h3>Account deletion</h3>
                    <p className={classes.settings__deletion__text}>Are you really want to abandon us? Well... it is your decision and we never try to convince to staying with us. Although, you will lose access to your orders, addresses and newsletter.  Your data will be removed</p>
                    <p className={classes.settings__deletion__warning}>This action is inevitable!</p>
                </div>
            </main>
        );
    }
}
export default AccountSettings;