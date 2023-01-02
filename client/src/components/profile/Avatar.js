import React from "react";
import defaultAvatar from '../../img/blank-avatar.png';
import classes from "./Avatar.module.scss";
class Avatar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={classes['avatar-box']}>
                <img src={defaultAvatar} width={80} height={80} className={classes['avatar-box__image']}/>
                {this.props.label && <p>{this.props.label}</p>}
            </div>
        );
    }
}
export default Avatar;