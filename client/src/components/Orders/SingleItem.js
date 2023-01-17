import React from "react";

class SingleItem extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <p>Product name: {this.props.productObj.productId.name}</p>
                <p>Quantity: {this.props.prodQuantity}</p>
                <p>Price: ${this.props.productObj.productId.price}</p>
                <p>Value: ${(this.props.productObj.productId.price * this.props.prodQuantity).toFixed(2)}</p>
                <hr/>
            </React.Fragment>
        );
    }
}
export default SingleItem;