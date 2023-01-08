import React from "react";
import Button from "../UI/Button";
import classes from "./ModalCart.module.scss";
import {Link} from "react-router-dom";
class ModalCart extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <h2>With account it's simpler to order</h2>
                <p>With created account you’re able to order simpler and faster! </p>
                <div className={classes.buttons}>
                    <Button variant={'fill'}>Sign up</Button>
                    <Button variant={'outline'}>Log in</Button>
                    <Link to={{pathname: '/shipment'}}><Button variant={'outline'}>Continue</Button></Link>
                </div>

            </React.Fragment>
        );
    }
}
export default ModalCart;