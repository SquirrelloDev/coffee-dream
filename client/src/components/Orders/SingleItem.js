import React from "react";

class SingleItem extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <p>Product name: name</p>
                <p>Quantity: 2</p>
                <p>Price: $23,99</p>
                <p>Value: $46,98</p>
                <hr/>
            </React.Fragment>
        );
    }
}
export default SingleItem;