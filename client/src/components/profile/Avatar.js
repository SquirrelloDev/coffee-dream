import React from "react";
import defaultAvatar from '../../img/blank-avatar.png';
import classes from "./Avatar.module.scss";
import ProductPage from "../../pages/ProductPage";
class Avatar extends React.Component{
    constructor(props) {
        super(props);
        this.state={image: null}

    }
    componentDidMount() {
        if(this.props.flag === 'PRODUCT'){
            this.setState({image: this.props.img});
        }
        else {
            const userPhoto = JSON.parse(localStorage.getItem('currentUser'));
            if(!userPhoto){
                return;
            }
            this.setState({image: userPhoto.profilePhotoFilename});
        }

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