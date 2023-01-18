import React from "react";
import classes from "./WelcomePage.module.scss";
import {Link, Redirect} from "react-router-dom";
import Button from "../components/UI/Button";
import {ACCESS_LEVEL} from "../config/global_const";
class WelcomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state={redirectToHome: false}
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if(user && user.accessLevel >= ACCESS_LEVEL.USER){
           this.setState({redirectHome: true});
            return;
        }
    }

    render() {
        return (
            <main className={classes.welcome}>
                {this.state.redirectHome &&  <Redirect to={'/home'}/>}
             <div className={classes.welcome__shadow}></div>
                <div className={classes.welcome__content}>
                    <h1>CoffeeDream</h1>
                    <p>CoffeeDream is a space for every coffee lover who seeks intense, aromatic coffees from around the world.</p>
                        <Link to={'/signup'} className={classes.welcome__content__link}><Button variant={'fill'}>Create account</Button></Link>
                        <Link to={'/login'} className={classes.welcome__content__link}><Button variant={'outline'}>Log in</Button></Link>
                        <Link to={'/home'}><button className={classes.welcome__content__browse}>or browse without account</button></Link>
                </div>
            </main>
        );
    }
}
export default WelcomePage