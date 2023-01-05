import React from "react";
import classes from "./AddButton.module.scss";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class AddButton extends React.Component{
    render() {
        return (
            <button className={classes.add}>
                <FontAwesomeIcon icon={faPlus} fixedWidth={true} size={'3x'}/>
            </button>
        );
    }
}
export default AddButton