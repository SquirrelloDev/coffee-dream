import React from "react";
import BottomBar from "../components/navs/BottomBar";
import HorizontalContainer from "../components/UI/HorizontalContainer";
import classes from "./Home.module.scss";
import TopBar from "../components/navs/TopBar";
import AddButton from "../components/UI/AddButton";
import axios from "axios";
import {ACCESS_LEVEL, CART_CONTEXT, GUEST_ID, SERVER_PATH} from "../config/global_const";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: true, products: {items: []}, user:{}}
    }
    componentDidMount() {
        //log in as guest for first visit
        const userObj = JSON.parse(localStorage.getItem('currentUser'));
        if(!userObj){
            console.log('USER NIE ISTNIEJE! ZACIĄGAM GUESTA');
            axios.get(`${SERVER_PATH}/users/${GUEST_ID}`).then(res => {
                localStorage.setItem('currentUser', JSON.stringify({
                    _id: res.data._id,
                    accessLevel: res.data.accessLevel,
                    name: res.data.name,
                    email: res.data.email,
                    password: res.data.password
                }));
                return this.setState({user:{
                        _id: res.data._id,
                        accessLevel: res.data.accessLevel,
                        name: res.data.name,
                        email: res.data.email,
                        password: res.data.password
                }})})
        }

        axios.get(`${SERVER_PATH}/products`).then(res => this.setState({products: {items: res.data}}));
        if(localStorage.getItem('cartItems') === null){
            localStorage.setItem(CART_CONTEXT, JSON.stringify({items: []}));
        }

    }

    render() {
        const currentUser =  JSON.parse(localStorage.getItem('currentUser'));
        return(
            <React.Fragment>
                <TopBar/>
            <main className={classes.homepage}>
                <h1 className={classes.homepage__heading}>Hello {currentUser.name ? currentUser.name : this.state.user.name}!</h1>
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
                {this.state.user.accessLevel === ACCESS_LEVEL.ADMIN && <AddButton/>}
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home