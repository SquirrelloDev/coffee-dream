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
import {SERVER_PATH} from "../config/global_const";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: true}
    }
    DUMMY_PRODUCTS = {items: [{id: 1, name: "Arabica", price: 22.99, stock: 25},{id: 2, name: "Esspresso", price: 1.99, stock: 0}]};
    componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <TopBar/>
            <main className={classes.homepage}>
                <h1 className={classes.homepage__heading}>Hello Derek!</h1>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Popular</h2>
                    <HorizontalContainer products={this.DUMMY_PRODUCTS}/>
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
                <AddButton/>
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home