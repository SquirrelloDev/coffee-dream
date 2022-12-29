import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Overlay extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={classes.overlay} onClick={this.props.closeModalFn}></div>
        );
    }
}
class ModalContent extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={classes.modal__box}>
                <FontAwesomeIcon icon={faXmark} onClick={this.props.closeModalFn} className={classes.xmark}/>
                {this.props.children}
            </div>
        );
    }
}
class Modal extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {ReactDOM.createPortal(<Overlay closeModalFn={this.props.closeModalFn}/>,document.getElementById('modal'))}
                {ReactDOM.createPortal(<ModalContent closeModalFn={this.props.closeModalFn}>{this.props.children}</ModalContent>, document.getElementById('modal'))}
            </div>
        );
    }
}
export default Modal;