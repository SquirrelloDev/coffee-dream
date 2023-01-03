import React from "react";
import Button from "../components/UI/Button";
import classes from "./Confirmation.module.scss";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Confirmation extends React.Component{
    render() {
        return (
            <main className={classes.confirmation}>
                <div className={classes.confirmation__tick}><FontAwesomeIcon icon={faCheck} className={classes.confirmation__tick__icon} size={'3x'}/></div>
                <h1>You're good to go</h1>
                <p>Dive into world of tasteful coffees</p>
                <Button variant={'fill'}>Browse</Button>
            </main>
        );
    }
}
export default Confirmation;