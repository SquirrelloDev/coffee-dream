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
        console.log(this.props)
    }

    render() {
        const prodArray = this.props.products;
        console.log(prodArray.items);
        return (
            <div className={`${classes.container} ${classes['snaps-inline']}`}>
                {prodArray.items.map(prod =>{
                    return <Link to={`/product/${prod.id}`} key={prod.id} className={classes.link}><ProductCard price={prod.price} stockValue={prod.stock}>{prod.name}</ProductCard></Link>
                })}


            </div>
        );
    }
}
export default HorizontalContainer;