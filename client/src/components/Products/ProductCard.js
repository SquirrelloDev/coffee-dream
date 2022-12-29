import React from "react";
import Card from "../UI/Card";
import classes from "../UI/Card.module.scss";
import image from '../../img/coffebag1.png';
class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inStock: true,
        }
    }
    // static getDerivedStateFromProps(props, state){
    //     if(props.inStock !== state.inStock){
    //         return {
    //             inStockVal: 0
    //         }
    //     }
    //     return null;
    // }
    componentDidMount() {
        if(this.props.stockValue > 0){
            return;
        }
        else{
            this.setState({inStock: false});
        }
    }

    render() {
        return (
            <Card>
                <img src={image} height={100}/>
                <p>Test</p>
                {this.state.inStock ? <p className={`${classes.stock} ${classes['stock--in']}`}>In stock</p> : <p className={`${classes.stock} ${classes['stock--out']}`}>Out of stock</p>}
                <p><span>$</span> 29.99</p>
            </Card>
        );
    }
}
export default ProductCard;