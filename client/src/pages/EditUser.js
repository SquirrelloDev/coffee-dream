import BackButton from "../components/UI/BackButton";
import Input from "../components/UI/inputs/Input";
import Dropdown from "../components/UI/inputs/Dropdown";
import React from "react";
import classes from "./UserForm.module.scss";
import Avatar from "../components/profile/Avatar";
import Button from "../components/UI/Button";
class NewUser extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className={classes.user}>
                <BackButton path={'/users'} glassZone={45}/>
                <h1>Editing user</h1>
                <h3>Basic information</h3>
                <form className={classes.user__form}>
                    <Input label={'First name'}/>
                    <Input label={'Last name'}/>
                    <Input label={'E-mail address'}/>
                    <Input label={'Password'} type={'password'}/>
                    <Dropdown/>
                    <h3>Avatar</h3>
                    <div className={classes['user__form__avatar']}>
                        <Avatar/>
                        <Button variant={'fill'}>Upload</Button>
                        <Button variant={'outline danger'}>Delete</Button>
                    </div>
                    <Button variant={'fill'}>Save</Button>
                </form>
            </main>
        );
    }
}
export default NewUser;