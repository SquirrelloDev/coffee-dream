import React from "react";
import Button from "../components/UI/Button";
import classes from "./Confirmation.module.scss";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class Confirmation extends React.Component{
    constructor(props) {
        super(props);

    }
    //in children goes h1 and p and in btnLabel goes button name
    render() {
        return (
            <main className={classes.confirmation}>
                <div className={classes.confirmation__tick}><FontAwesomeIcon icon={faCheck} className={classes.confirmation__tick__icon} size={'3x'}/></div>
                {this.props.children}
                <Link to={'/home'}><Button variant={'fill'}>{this.props.btnLabel}</Button></Link>
            </main>
        );
    }
}
export default Confirmation;