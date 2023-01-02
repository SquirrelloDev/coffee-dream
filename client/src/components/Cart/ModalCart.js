import React from "react";
import Button from "../UI/Button";
import classes from "./ModalCart.module.scss";
class ModalCart extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h2>With account it's simpler to order</h2>
                <p>With created account you’re able to order simpler and faster! </p>
                <p>You will get also:</p>
                <ol className={classes.list}>
                    <li>Access to orders history</li>
                    <li>Professional support 24/7</li>
                    <li>News about our recent products and offers</li>
                    <li>Free WiFi in our Drink&Buy stops</li>
                </ol>
                <div className={classes.buttons}>
                    <Button variant={'fill'}>Sign up</Button>
                    <Button variant={'outline'}>Log in</Button>
                    <Button variant={'outline'}>Continue</Button>
                </div>

            </React.Fragment>
        );
    }
}
export default ModalCart;