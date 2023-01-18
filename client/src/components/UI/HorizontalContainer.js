import React from "react";
import classes from "./HorizontalContainer.module.scss";
import ProductCard from "../Products/ProductCard";
import {Link} from "react-router-dom";
import axios from "axios";
import {SERVER_PATH} from "../../config/global_const";

class HorizontalContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={products:{items: []}}
    }
    componentDidMount() {
        axios.get(`${SERVER_PATH}/products/composition/${this.props.composition}`).then(res => this.setState({products: {items: res.data}})).catch(err => console.log(err));
    }

    render() {
        const prodArray = this.state.products;
        return (
            <div className={`${classes.container} ${classes['snaps-inline']}`}>
                {prodArray.items.map(prod =>{
                    return <Link to={{pathname: `/product/${prod._id}`}} key={prod.id} className={classes.link}><ProductCard key={prod.id} price={prod.price} stockValue={prod.stock} prodImage={prod.imageFileName}>{prod.name}</ProductCard></Link>
                })}
            </div>
        );
    }
}
export default HorizontalContainer;