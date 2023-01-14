import React from "react";
import BackButton from "../components/UI/BackButton";
import testImg from "../img/coffebag2.png";
import testImg2 from '../img/coffebag1.png';
import classes from "./ProductPage.module.scss";
import SCA from "../components/Products/SCA";
import QuantityBox from "../components/Products/QuantityBox";
import Button from "../components/UI/Button";
import{faBagShopping, faEarthAmericas, faCoffee, faFire, faDroplet, faLemon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rating from "../components/Products/Rating";
import BottomBar from "../components/navs/BottomBar";
import Modal from "../components/UI/Modal";
import Input from "../components/UI/inputs/Input";
import {ACCESS_LEVEL, CART_CONTEXT, SERVER_PATH} from "../config/global_const";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import TopBar from "../components/navs/TopBar";

class ProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: false, redirectToHome: false,productData:{
                _id: 0,
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
                sca: 0,
                QUANTITY: 1
            }}
    }
    closeModal(){
        this.setState({modalOpen: false})
    }
    openModal(){
        this.setState({modalOpen: true})
    }
    addItemToCart(){
        //pobieramy cały koszyk z localStorage
        const cart = JSON.parse(localStorage.getItem(CART_CONTEXT));
        const existingCartItemIdx = cart.items.findIndex(item => item._id === this.state.productData._id);
        const existingCartItem = cart.items[existingCartItemIdx];
        let updatedItems;
        //kiedy istnieje
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                QUANTITY: existingCartItem.QUANTITY + this.state.productData.QUANTITY
            }
            updatedItems = [...cart.items]
            updatedItems[existingCartItemIdx] = updatedItem;
        }
        else{
            updatedItems = cart.items.concat(this.state.productData);
        }
        localStorage.setItem(CART_CONTEXT, JSON.stringify({items: [...updatedItems]}));
    }
    addQuantity(){
        if(this.state.productData.QUANTITY >= 999){
            return;
        }
        this.setState(prevState => ({productData:{...prevState.productData, QUANTITY: prevState.productData.QUANTITY + 1 }}))
    }
    substractQuantity(){
        if(this.state.productData.QUANTITY <= 1){
            return;
        }
        this.setState(prevState => ({productData:{...prevState.productData, QUANTITY: prevState.productData.QUANTITY - 1 }}))
    }
    componentDidMount() {
        axios.get(`${SERVER_PATH}/products/${this.props.match.params.id}`).then(res => this.setState({
            productData:{
                _id: res.data._id,
                name: res.data.name,
                price: res.data.price,
                description: res.data.description,
                image: res.data.imageFileName, //here
                stock: res.data.stock,
                origin: res.data.origin,
                composition: res.data.composition,
                aroma: res.data.aroma,
                intensity: res.data.intensity,
                body: res.data.body,
                sca: res.data.sca,
                QUANTITY: 1
            }
        }))
    }
    productDeletionProcess(itemId){
        let updatedItems;
        const cart = JSON.parse(localStorage.getItem(CART_CONTEXT));
        updatedItems = cart.items.filter(item => item._id !== itemId);
        localStorage.setItem(CART_CONTEXT, JSON.stringify({items: [...updatedItems]}));
        axios.delete(`${SERVER_PATH}/products/${this.state.productData._id}`).then(res => this.setState({redirectToHome: true})).catch(err => console.log(err));

    }
    render() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return (
            <React.Fragment>
             <TopBar/>
            <main className={classes.product}>
                {this.state.redirectToHome && <Redirect to={'/home'}/>}
                <BackButton path='/home' glassZone={250}/>
                <div className={classes['image-box']}>
                    <img src={`data:;base64,${this.state.productData.image}`}/>
                </div>
                <section className={`${classes.main__box} ${classes.section}`}>
                    <h2 className={classes.main__box__title}>{this.state.productData.name}</h2>
                    <SCA score={this.state.productData.sca}/>
                    <p className={classes.main__box__price}><span>$</span>{this.state.productData.price}<span>per item</span></p>
                    <p className={classes.main__box__stock}>In stock: {this.state.productData.stock}</p>
                </section>
                <section className={`${classes.section} ${classes['action-box']}`}>
                    <QuantityBox currentQuantity={this.state.productData.QUANTITY} addHandler={this.addQuantity.bind(this)} subtractHandler={this.substractQuantity.bind(this)}  labelEnabled={true}/>
                    <Button behaviorFn={this.addItemToCart.bind(this)} variant='fill' disabled={this.state.productData.stock > 0 ? false : true}>TO CART <FontAwesomeIcon icon={faBagShopping}/></Button>
                </section>
                {currentUser.accessLevel === ACCESS_LEVEL.ADMIN &&
                <section className={`${classes['admin-box']} ${classes.section}`}>
                    {/*<Button behaviorFn={this.openModal.bind(this)} variant={'fill'}>Change stock</Button>*/}
                    <Link to={`/products/product/${this.props.match.params.id}`} className={classes.link}><Button variant={'outline'}>Edit product</Button></Link>
                    <Button behaviorFn={this.openModal.bind(this)} variant={'outline danger'}>Delete</Button>
                </section>
                }
                <section className={`${classes.section} ${classes['desc-box']}`}>
                    <h3>Description</h3>
                    <p>{this.state.productData.description ? this.state.productData.description : "No description provided"}</p>
                </section>
                <section className={`${classes.section} ${classes['information-box']}`}>
                    <h3>Product information</h3>
                    <ul>
                        <li><span><FontAwesomeIcon icon={faEarthAmericas} fixedWidth/></span>Origin: {this.state.productData.origin}</li>
                        <li><span><FontAwesomeIcon icon={faCoffee} fixedWidth/></span>Composition: {this.state.productData.composition}</li>
                        <li><span><FontAwesomeIcon icon={faLemon} fixedWidth/></span>Aroma: {this.state.productData.aroma}</li>
                        <li><span><FontAwesomeIcon icon={faFire} fixedWidth/></span>Intensity:<Rating rating={this.state.productData.intensity}/></li>
                        <li><span><FontAwesomeIcon icon={faDroplet} fixedWidth/></span>Body:<Rating rating={this.state.productData.body}/></li>
                    </ul>
                </section>
                {this.state.modalOpen &&
                    <Modal closeModalFn={this.closeModal.bind(this)}>
                        <h3>Warning!</h3>
                        <p className={classes.modal__sub}>You're going to delete product: {this.state.productData.name}</p>
                        <p className={classes.modal__sub}>Product and it's data will be lost and will be removed from cart</p>
                        <p className={classes.modal__sub}>Are you wish to proceed?</p>
                        <Button behaviorFn={this.productDeletionProcess.bind(this, this.state.productData._id)} variant={'fill danger'}>Confirm deletion</Button>
                </Modal>}
                <div className={classes.section__padding}></div>
            </main>
            <BottomBar/>
            </React.Fragment>
        );
    }
}
export default ProductPage;