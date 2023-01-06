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
        this.state={productData: {
                id: 0,
                name: '',
                price: 0.00,
                description: '',
                image: '',
                stock: 0,
                origin: "",
                composition: '',
                aroma: '',
                intensity: 0,
                body: 0,
                sca: 0
            }}

    }
    componentDidMount() {
        //fetchowanie produktu po id
    }

    render() {
        return (
            <main className={classes.user}>
                <BackButton path={`/product/${this.state.productData.id}`} glassZone={45}/>
                <h1>Editing product</h1>
                <h3>Basic information</h3>
                <form className={classes.user__form}>
                    <Input label={'Product name'} defValue={this.state.productData.name}/>
                    <Input label={'Price'} type={'number'} defValue={this.state.productData.price}/>
                    <h3>Picture</h3>
                    <div className={classes['user__form__avatar']}>
                        <Avatar/>
                        <Button variant={'fill'}>Upload</Button>
                        <Button variant={'outline danger'}>Delete</Button>
                    </div>
                    <h3>Extra information</h3>
                    <Textarea/>
                    <Input label={'Origin'} defValue={this.state.productData.origin}/>
                    <Input label={'Composition'} defValue={this.state.productData.composition}/>
                    <Input label={'Aroma'} defValue={this.state.productData.aroma}/>
                    <Input label={'Intensity'} type={'number'} defValue={this.state.productData.intensity}/>
                    <Input label={'Body'} type={'number'} defValue={this.state.productData.body}/>
                    <Input label={'SCA score'} type={'number'} defValue={this.state.productData.sca}/>
                    <Button variant={'fill'}>Save</Button>
                </form>
            </main>
        );
    }
}
export default NewUser;