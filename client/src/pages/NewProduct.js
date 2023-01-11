import BackButton from "../components/UI/BackButton";
import Input from "../components/UI/inputs/Input";
import Dropdown from "../components/UI/inputs/Dropdown";
import React from "react";
import classes from "./UserForm.module.scss";
import Avatar from "../components/profile/Avatar";
import Button from "../components/UI/Button";
import Textarea from "../components/UI/inputs/Textarea";
class NewUser extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            price: 0,
            quantity: 0,
            productImage: null,
            origin: '',
            composition:'',
            aroma: '',
            intensity: 0,
            body: 0,
            sca: 0,
            errObj:{
                nameErr: false,
                priceErr: false,
                quantityErr: false,
                productImageErr: false,
                originErr: false,
                compositionErr: false,
                aromaErr: false,
                intensityErr: false,
                bodyErr: false,
                scaErr: false,
            }

        }
    }
    validate(e){
        e.preventDefault();
        let nameInvalid, priceInvalid, quantityInvalid, imageInvalid, originInvalid, compositionInvalid, aromaInvalid, intensityInvalid, bodyInvalid, scaInvalid
    }
    render() {
        return (
            <main className={classes.user}>
                <BackButton path={'/users'} glassZone={45}/>
                <h1>New product</h1>
                <h3>Basic information</h3>
                <form className={classes.user__form}>
                    <Input label={'Product name'}/>
                    <Input label={'Price'} type={'number'}/>
                    <Input label={'Quantity'} type={'number'}/>
                    <h3>Picture</h3>
                    <div className={classes['user__form__avatar']}>
                        <Avatar/>
                        <Button variant={'fill'}>Upload</Button>
                        <Button variant={'outline danger'}>Delete</Button>
                    </div>
                    <h3>Extra information</h3>
                    <Textarea/>
                    <Input label={'Origin'}/>
                    <Input label={'Composition'}/>
                    <Input label={'Aroma'}/>
                    <Input label={'Intensity'} type={'number'}/>
                    <Input label={'Body'} type={'number'}/>
                    <Input label={'SCA score'} type={'number'}/>
                    <Button variant={'fill'}>Save</Button>
                </form>
            </main>
        );
    }
}
export default NewUser;