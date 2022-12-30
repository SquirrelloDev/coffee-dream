import React from "react";
import Card from "./Card";
import classes from "./HorizontalContainer.module.scss";
import ProductCard from "../Products/ProductCard";

class HorizontalContainer extends React.Component{
    render() {
        return (
            <div className={`${classes.container} ${classes['snaps-inline']}`}>
                <ProductCard stockValue={20}>Arabica with nut</ProductCard>
                <ProductCard stockValue={20}>Test with 11</ProductCard>
                <ProductCard stockValue={20}>Test with 11</ProductCard>
                <ProductCard stockValue={20}>Test with 11</ProductCard>
                <ProductCard stockValue={20}>Test with 11</ProductCard>
                <ProductCard stockValue={20}>Test with 11</ProductCard>
            </div>
        );
    }
}
export default HorizontalContainer;