import React from "react";
import defaultAvatar from '../../img/blank-avatar.png';
import classes from "./Avatar.module.scss";
class Avatar extends React.Component{
    constructor(props) {
        super(props);
        this.state={image: null}

    }
    componentDidMount() {
        const userPhoto = JSON.parse(localStorage.getItem('currentUser')).profilePhotoFilename;
        console.log(userPhoto);
        this.setState({image: userPhoto});
    }

    render() {
        return (
            <div className={classes['avatar-box']}>
                <img src={this.state.image ? `data:;base64,${this.state.image}` : defaultAvatar} className={classes['avatar-box__image']}/>
                {this.props.label && <p>{this.props.label}</p>}
            </div>
        );
    }
}
export default Avatar;