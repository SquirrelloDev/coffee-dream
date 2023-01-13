import React from "react";
import classes from "./WelcomePage.module.scss";
import {Link} from "react-router-dom";
import Button from "../components/UI/Button";
class WelcomePage extends React.Component{
    render() {
        return (
            <main className={classes.welcome}>
             <div className={classes.welcome__shadow}></div>
                <div className={classes.welcome__content}>
                    <h1>CoffeDream</h1>
                    <p>CoffeDream is a space for every coffee lover who seeks intense, aromatic coffees from around the world.</p>
                        <Link to={'/signup'} className={classes.welcome__content__link}><Button variant={'fill'}>Create account</Button></Link>
                        <Link to={'/login'} className={classes.welcome__content__link}><Button variant={'outline'}>Log in</Button></Link>
                        <Link to={'/home'}><button className={classes.welcome__content__browse}>or browse without account</button></Link>
                </div>
            </main>
        );
    }
}
export default WelcomePage