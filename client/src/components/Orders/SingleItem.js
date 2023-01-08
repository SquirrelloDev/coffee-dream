import React from "react";

class SingleItem extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <p>Product name: {this.props.productObj.name}</p>
                <p>Quantity: {this.props.prodQuantity}</p>
                <p>Price: ${this.props.productObj.price}</p>
                <p>Value: ${this.props.productObj.price * this.props.prodQuantity}</p>
                <hr/>
            </React.Fragment>
        );
    }
}
export default SingleItem;