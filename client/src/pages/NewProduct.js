import BackButton from "../components/UI/BackButton";
import Input from "../components/UI/inputs/Input";
import Dropdown from "../components/UI/inputs/Dropdown";
import React from "react";
import classes from "./UserForm.module.scss";
import Avatar from "../components/profile/Avatar";
import Button from "../components/UI/Button";
import Textarea from "../components/UI/inputs/Textarea";
import axios from "axios";
import {ACCESS_LEVEL, SERVER_PATH} from "../config/global_const";
import {Redirect} from "react-router-dom";
import Toast from "../components/UI/Toast";
class NewProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            redirectToHome: false,
            name: '',
            price: 0,
            quantity: 0,
            productImage: null,
            description: '',
            origin: '',
            composition:'',
            aroma: '',
            intensity: 0,
            body: 0,
            sca: 0,
            errorObj:{
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
    setName(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                name: inputText
            }
        })
    }
    setPrice(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                price: parseFloat(inputText)
            }
        })
    }
    setQuantity(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                quantity: parseInt(inputText,10)
            }
        })
    }
    setImage(e){
        this.setState(prevState => {
            return {
                ...prevState,
                productImage: e.target.files[0]
            }
        })
    }
    setDescription(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                description: inputText
            }
        })
    }
    setOrigin(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                origin: inputText
            }
        })
    }
    setComposition(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                composition: inputText
            }
        })
    }
    setAroma(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                aroma: inputText
            }
        })
    }
    setIntensity(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                intensity: parseInt(inputText, 10)
            }
        })
    }
    setBody(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                body: parseInt(inputText, 10)
            }
        })
    }
    setSca(inputText){
        this.setState(prevState => {
            return {
                ...prevState,
                sca: parseInt(inputText, 10)
            }
        })
    }
    validate(e){
        e.preventDefault();
        let nameInvalid = true, priceInvalid=true, quantityInvalid=true, imageInvalid=true, originInvalid=true, compositionInvalid=true, aromaInvalid=true, intensityInvalid=true, bodyInvalid=true, scaInvalid=true;
        if(this.state.name !==''){
            nameInvalid = false;
        }
        if(this.state.price !== 0){
            priceInvalid = false
        }
        if(this.state.quantity !== 0){
            quantityInvalid = false
        }
        if(this.state.productImage){
            imageInvalid = false;
        }
        if(this.state.origin !== ''){
            originInvalid = false;
        }
        if(this.state.composition !==''){
            compositionInvalid = false;
        }
        if(this.state.aroma !==''){
            aromaInvalid = false;
        }
        if(this.state.intensity >= 1 || this.state.intensity <= 5){
            intensityInvalid = false;
        }
        if(this.state.body >= 1 || this.state.body <= 5){
            bodyInvalid = false;
        }
        if(this.state.sca >= 0 || this.state.sca <= 100){
            scaInvalid = false;
        }
        if(!nameInvalid && !priceInvalid && !quantityInvalid && !imageInvalid && !originInvalid && !compositionInvalid && !aromaInvalid && !intensityInvalid && !bodyInvalid && !scaInvalid){
            const formData = new FormData();
            formData.append('name', `${this.state.name}`);
            formData.append('price', this.state.price);
            formData.append('stock', this.state.quantity);
            formData.append('productPhoto', this.state.productImage);
            formData.append("description", this.state.description);
            formData.append('origin', this.state.origin);
            formData.append('composition', this.state.composition);
            formData.append('aroma', this.state.aroma);
            formData.append('intensity', this.state.intensity);
            formData.append('body', this.state.body);
            formData.append('sca', this.state.sca);
            axios.post(`${SERVER_PATH}/products`, formData, {headers:{"Content-type": "multipart/form-data"}}).then(res=> this.setState({redirectToHome: true})).catch(err => console.log(err));
        }
        else{
            this.setState({errorObj:{
                    nameErr: nameInvalid,
                    priceErr: priceInvalid,
                    quantityErr: quantityInvalid,
                    productImageErr: imageInvalid,
                    originErr: originInvalid,
                    compositionErr: compositionInvalid,
                    aromaErr: aromaInvalid,
                    intensityErr: intensityInvalid,
                    bodyErr: bodyInvalid,
                    scaErr: scaInvalid,
                }})
        }
    }
    componentDidMount() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if((currentUser && currentUser.accessLevel < ACCESS_LEVEL.ADMIN) || !currentUser){
            this.setState({redirectToHome: true});
        }
    }

    render() {
        return (
            <main className={classes.user}>
                {this.state.redirectToHome && <Redirect to='home'/>}
                <BackButton path={'/home'} glassZone={45}/>
                <h1>New product</h1>
                <h3>Basic information</h3>
                <form onSubmit={this.validate.bind(this)} className={classes.user__form}>
                    <Input errStatus={this.state.errorObj.nameErr} errValue={'Enter a product name'} getValue={this.setName.bind(this)} label={'Product name'}/>
                    <Input errStatus={this.state.errorObj.priceErr} errValue={'Enter a valid price'} getValue={this.setPrice.bind(this)} label={'Price'} type={'number'} defValue={this.state.price}/>
                    <Input errStatus={this.state.errorObj.quantityErr} errValue={'Enter a valid quantity'} getValue={this.setQuantity.bind(this)} label={'Quantity'} type={'number'} defValue={this.state.quantity}/>
                    <h3>Picture</h3>
                    <div className={classes['user__form__avatar']}>
                        <input type={'file'} name={'productPhoto'} onChange={this.setImage.bind(this)}/>
                    </div>
                    <h3>Extra information</h3>
                    <Textarea getValue={this.setDescription.bind(this)}/>
                    <Input errStatus={this.state.errorObj.originErr} errValue={'Provide origin'} getValue={this.setOrigin.bind(this)} label={'Origin'}/>
                    <Input errStatus={this.state.errorObj.compositionErr} errValue={'Provide composition'} getValue={this.setComposition.bind(this)} label={'Composition'}/>
                    <Input errStatus={this.state.errorObj.aromaErr} errValue={'Provide aroma'} getValue={this.setAroma.bind(this)} label={'Aroma'}/>
                    <Input errStatus={this.state.errorObj.intensityErr} errValue={'Invalid range'} getValue={this.setIntensity.bind(this)} label={'Intensity'} type={'number'} min={1} max={5} defValue={this.state.intensity}/>
                    <Input errStatus={this.state.errorObj.bodyErr} errValue={'Invalid range'} getValue={this.setBody.bind(this)} label={'Body'} type={'number'} min={1} max={5} defValue={this.state.body}/>
                    <Input errStatus={this.state.errorObj.scaErr} errValue={'Invalid range'} getValue={this.setSca.bind(this)} label={'SCA score'} type={'number'} min={0} max={100} defValue={this.state.sca}/>
                    <Button type={'submit'} variant={'fill'}>Save</Button>
                    {this.state.errorObj.productImageErr && <Toast>Set product image!</Toast>}
                </form>
            </main>
        );
    }
}
export default NewProduct;