import React from "react";
import BackButton from "../components/UI/BackButton";
import testImg from "../img/coffebag2.png";
import testImg2 from '../img/coffebag1.png';
import classes from "./ProductPage.module.scss";
import SCA from "../components/Products/SCA";
import QuantityBox from "../components/Products/QuantityBox";
import Button from "../components/UI/Button";
import{faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ProductPage extends React.Component{
    render() {
        return (
            <main>
                <BackButton path='/home' glassZone={250}/>
                <div className={classes['image-box']}>
                    <img src={testImg2}/>
                </div>
                <section className={`${classes.main__box} ${classes.section}`}>
                    <p className={classes.main__box__title}>Arabica </p>
                    <SCA/>
                    <p className={classes.main__box__price}><span>$</span>29.99</p>
                    <p className={classes.main__box__stock}>In stock: 216</p>
                </section>
                <section>
                {/*buttony dla admina */}
                </section>
                <section className={`${classes.section} ${classes['action-box']}`}>
                    <QuantityBox labelEnabled={true}/>
                    <Button variant='fill' disabled={false}>TO CART <FontAwesomeIcon icon={faBagShopping}/></Button>
                </section>
            </main>
        );
    }
}
export default ProductPage;