import React from "react";
import BottomBar from "../components/navs/BottomBar";
import Card from "../components/UI/Card";
import HorizontalContainer from "../components/UI/HorizontalContainer";
import classes from "./Home.module.scss";
import Button from "../components/UI/Button";
import Toast from "../components/UI/Toast";
import Modal from "../components/UI/Modal";
import TopBar from "../components/navs/TopBar";
import AddButton from "../components/UI/AddButton";
import axios from "axios";
import {ACCESS_LEVEL, SERVER_PATH} from "../config/global_const";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: true, products: {items: []}}
    }
    componentDidMount() {
        axios.get(`${SERVER_PATH}/users/63b9592ade20c7b2e30c079b`).then(res => localStorage.setItem('currentUser', JSON.stringify({
            _id: res.data._id,
            accessLevel: res.data.accessLevel,
            name: res.data.name,
            email: res.data.email,
            password: res.data.password
        })))
        axios.get(`${SERVER_PATH}/products`).then(res => this.setState({products: {items: res.data}}));
    }

    render() {
        const currentUser =  JSON.parse(localStorage.getItem('currentUser'));
        return(
            <React.Fragment>
                <TopBar/>
            <main className={classes.homepage}>
                <h1 className={classes.homepage__heading}>Hello {currentUser.name}!</h1>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Popular</h2>
                    <HorizontalContainer products={this.state.products}/>
                </section>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Arabica selection</h2>
                    {/*<HorizontalContainer/>*/}
                </section>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Espresso</h2>
                    {/*<HorizontalContainer/>*/}
                </section>
                <section>
                    <h2 className={classes['homepage__section-heading']}>High caffeine ratio</h2>
                    {/*<HorizontalContainer/>*/}
                </section>
                <div className={classes.homepage__padding}></div>
            </main>
                {currentUser.accessLevel === ACCESS_LEVEL.ADMIN && <AddButton/>}
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home