import React from "react";
import classes from "./SCA.module.scss";
class SCA extends React.Component{
    render() {
        return (
            <div className={classes.sca__box}>
                <span>sca:</span><span>85</span>
            </div>
        );
    }
}
export default SCA;