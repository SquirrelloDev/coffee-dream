import React from "react";
import Card from "../UI/Card";
import classes from "../UI/Card.module.scss";
import image from '../../img/coffebag1.png';
import defaultAvatar from "../../img/blank-avatar.png";
class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inStock: true,
            cardTitle: this.props.children,
            image: this.props.prodImage
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
    }

    render() {
        return (
            <Card>
                <img src={this.state.image ? `data:;base64,${this.state.image}` : image}/>
                <div>
                    <p>{this.state.cardTitle}</p>
                    {this.state.inStock ? <p className={`${classes.stock} ${classes['stock--in']}`}>In stock</p> : <p className={`${classes.stock} ${classes['stock--out']}`}>Out of stock</p>}
                    <p><span>$</span> {(this.props.price).toFixed(2)}</p>
                </div>

            </Card>
        );
    }
}
export default ProductCard;