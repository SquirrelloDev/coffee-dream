import React from "react";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import classes from "./Rating.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class Rating extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={classes.rating__container}>
                {[...Array(5)].map((star, idx)=> <FontAwesomeIcon icon={faStar} className={idx < this.props.rating ? classes.star : classes['star--off']}/>)}
            </div>
        );
    }
}
export default Rating;