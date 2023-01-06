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
import Textarea from "../components/UI/inputs/Textarea";
import {CART_CONTEXT} from "../config/global_const";

class ProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: false, productData:{
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
    closeModal(){
        this.setState({modalOpen: false})
    }
    openModal(){
        this.setState({modalOpen: true})
    }
    addItemToCart(){
        //kiedy element nie istnieje w koszyku
        let updatedItems;
        // updatedItems = JSON.parse(localStorage.getItem(CART_CONTEXT)).items.concat();
        // localStorage.setItem(CART_CONTEXT, {items:} )
    }
    componentDidMount() {
        //fetchowanie produktu po id i umieszczenie tego odpowiednio
    }

    render() {
        return (
            <React.Fragment>
            <main>
                <BackButton path='/home' glassZone={250}/>
                <div className={classes['image-box']}>
                    <img src={testImg2}/>
                </div>
                <section className={`${classes.main__box} ${classes.section}`}>
                    <h2 className={classes.main__box__title}>{this.state.productData.name}</h2>
                    <SCA/>
                    <p className={classes.main__box__price}><span>$</span>{this.state.productData.price}</p>
                    <p className={classes.main__box__stock}>In stock: {this.state.productData.stock}</p>
                </section>
                <section className={`${classes['admin-box']} ${classes.section}`}>
                    <Button behaviorFn={this.openModal.bind(this)} variant={'fill'}>Change stock</Button>
                    <Button variant={'outline'}>Edit product</Button>
                    <Button variant={'outline danger'}>Delete</Button>
                </section>
                <section className={`${classes.section} ${classes['action-box']}`}>
                    <QuantityBox labelEnabled={true}/>
                    <Button variant='fill' disabled={this.state.productData.stock > 0 ? false : true}>TO CART <FontAwesomeIcon icon={faBagShopping}/></Button>
                </section>
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
                        <h3>Enter new stock value</h3>
                        <p className={classes.modal__sub}>Enter a positive number to add or negative to subtract</p>
                        <Input type={'number'}/>
                        <Button variant={'fill'}>Confirm</Button>
                </Modal>}
                <div className={classes.section__padding}></div>
            </main>
            <BottomBar/>
            </React.Fragment>
        );
    }
}
export default ProductPage;