import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import classes from "./BackButton.module.scss";
import {Link} from "react-router-dom";
class BackButton extends React.Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const btn = document.querySelector('#backbtn');
        window.addEventListener('scroll', () => {
            if(window.scrollY > this.props.glassZone){
                btn.classList.add(classes.glass);
            }
            else{
                btn.classList.remove(classes.glass);
            }
        })
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <Link to={this.props.path === '' ? '/home' : this.props.path}><button id={'backbtn'} className={classes.backbtn}><FontAwesomeIcon icon={faChevronLeft} className={classes.icon} size={'2xl'}/></button></Link>
        );
    }
}
export default BackButton;