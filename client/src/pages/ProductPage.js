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

class ProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: false}
    }
    closeModal(){
        this.setState({modalOpen: false})
    }
    openModal(){
        this.setState({modalOpen: true})
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
                    <h2 className={classes.main__box__title}>Arabica </h2>
                    <SCA/>
                    <p className={classes.main__box__price}><span>$</span>29.99</p>
                    <p className={classes.main__box__stock}>In stock: 216</p>
                </section>
                <section className={`${classes['admin-box']} ${classes.section}`}>
                    <Button behaviorFn={this.openModal.bind(this)} variant={'fill'}>Change stock</Button>
                    <Button variant={'outline'}>Edit product</Button>
                    <Button variant={'outline'}>Delete</Button>
                </section>
                <section className={`${classes.section} ${classes['action-box']}`}>
                    <QuantityBox labelEnabled={true}/>
                    <Button variant='fill' disabled={false}>TO CART <FontAwesomeIcon icon={faBagShopping}/></Button>
                </section>
                <section className={`${classes.section} ${classes['desc-box']}`}>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis amet, egestas velit amet gravida in viverra. Tortor aliquet imperdiet donec vitae. Arcu nisl id quis sit egestas facilisis iaculis non tincidunt. Magna adipiscing a orci gravida sed risus enim sed pretium</p>
                </section>
                <section className={`${classes.section} ${classes['information-box']}`}>
                    <h3>Product information</h3>
                    <ul>
                        <li><span><FontAwesomeIcon icon={faEarthAmericas} fixedWidth/></span>Origin: America</li>
                        <li><span><FontAwesomeIcon icon={faCoffee} fixedWidth/></span>Composition: 100% Arabica</li>
                        <li><span><FontAwesomeIcon icon={faLemon} fixedWidth/></span>Aroma: Chocolate</li>
                        <li><span><FontAwesomeIcon icon={faFire} fixedWidth/></span>Intensity:<Rating rating={3}/></li>
                        <li><span><FontAwesomeIcon icon={faDroplet} fixedWidth/></span>Body:<Rating rating={5}/></li>
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