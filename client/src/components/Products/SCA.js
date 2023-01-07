import React from "react";
import classes from "./SCA.module.scss";
class SCA extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={classes.sca__box}>
                <span>sca:</span><span>{this.props.score}</span>
            </div>
        );
    }
}
export default SCA;