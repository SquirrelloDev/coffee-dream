import React from "react";
import Card from "../UI/Card";
import classes from "../UI/Card.module.scss";
import image from '../../img/coffebag1.png';
class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inStock: true,
            cardTitle: this.props.children
        }
    }
    componentDidMount() {
        if(this.props.children.trim().length > 12){
            this.setState({cardTitle: this.props.children.trim().substring(0,9)+"..."})
        }
        if(this.props.stockValue > 0){
            return;
        }
        else{
            this.setState({inStock: false});
        }
        //longer names

    }

    render() {
        return (
            <Card>
                <img src={image} height={100}/>
                <p>{this.state.cardTitle}</p>
                {this.state.inStock ? <p className={`${classes.stock} ${classes['stock--in']}`}>In stock</p> : <p className={`${classes.stock} ${classes['stock--out']}`}>Out of stock</p>}
                <p><span>$</span> {this.props.price}</p>
            </Card>
        );
    }
}
export default ProductCard;