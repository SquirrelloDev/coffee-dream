import React from "react";
import Card from "./Card";
import classes from "./HorizontalContainer.module.scss";
import ProductCard from "../Products/ProductCard";
import {Link} from "react-router-dom";

class HorizontalContainer extends React.Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
    }

    render() {
        const prodArray = this.props.products;
        return (
            <div className={`${classes.container} ${classes['snaps-inline']}`}>
                {prodArray.items.map(prod =>{
                    return <Link to={{pathname: `/product/${prod._id}`}} key={prod.id} className={classes.link}><ProductCard key={prod.id} price={prod.price} stockValue={prod.stock}>{prod.name}</ProductCard></Link>
                })}


            </div>
        );
    }
}
export default HorizontalContainer;