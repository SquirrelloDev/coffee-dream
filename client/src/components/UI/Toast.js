import React from "react";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import classes from "./Toast.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class Toast extends React.Component{
    timer;

    constructor(props) {
        super(props);
        this.state={active: false}
    }

    componentDidMount() {
        this.setState({active: true});
        this.timer = setTimeout(() => {this.setState({active: false})}, 3100)
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        let classContent;
        return (
            <div className={!this.state.active ? classes['toast--disabled'] : classes.toast}>
                <FontAwesomeIcon icon={faCircleInfo} size="xl"/>{this.props.children}
            </div>
        );
    }
}
export default Toast;