import React from "react";
import Card from "./Card";
import classes from "./HorizontalContainer.module.scss";
import ProductCard from "../Products/ProductCard";

class HorizontalContainer extends React.Component{
    render() {
        return (
            <div className={`${classes.container} ${classes['snaps-inline']}`}>
                <ProductCard stockValue={0}/>
                <ProductCard stockValue={20}/>
                <ProductCard stockValue={20}/>
                <ProductCard stockValue={20}/>
                <ProductCard stockValue={20}/>
                <ProductCard stockValue={20}/>
            </div>
        );
    }
}
export default HorizontalContainer;