import React from "react";
import BottomBar from "../components/navs/BottomBar";
import HorizontalContainer from "../components/UI/HorizontalContainer";
import classes from "./Home.module.scss";
import TopBar from "../components/navs/TopBar";
import AddButton from "../components/UI/AddButton";
import axios from "axios";
import {ACCESS_LEVEL, CART_CONTEXT, GUEST_ID, SERVER_PATH} from "../config/global_const";
import {Link} from "react-router-dom";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: true, products: {items: []}}
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
                }))})
        }

        axios.get(`${SERVER_PATH}/products`).then(res => this.setState({products: {items: res.data}}));
        if(localStorage.getItem('cartItems') === null){
            localStorage.setItem(CART_CONTEXT, JSON.stringify({items: []}));
        }

    }

    render() {
        const currentUser =  JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);
        let content, access;
        if(!currentUser){
            content = "Guest";
            access = 0;
        }
        else{
            content = (currentUser.name).split(' ')[0];
            access = currentUser.accessLevel;
        }
        return(
            <React.Fragment>
                <TopBar/>
            <main className={classes.homepage}>
                <h1 className={classes.homepage__heading}>Hello {content}!</h1>
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
                {access === ACCESS_LEVEL.ADMIN &&  <Link to={'/products'}><AddButton/></Link>}
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home