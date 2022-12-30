import React from "react";
import BottomBar from "../components/navs/BottomBar";
import Card from "../components/UI/Card";
import HorizontalContainer from "../components/UI/HorizontalContainer";
import classes from "./Home.module.scss";
import Button from "../components/UI/Button";
import Toast from "../components/UI/Toast";
import Modal from "../components/UI/Modal";
import TopBar from "../components/navs/TopBar";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalOpen: true}
        this.closeModalHandler = () =>{
            this.setState({modalOpen: false});
        }
    }

    render() {
        return(
            <React.Fragment>
                <TopBar/>
            <main className={classes.homepage}>
                <h1 className={classes.homepage__heading}>Hello Derek!</h1>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Popular</h2>
                    <HorizontalContainer/>
                </section>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Arabica selection</h2>
                    <HorizontalContainer/>
                </section>
                <section>
                    <h2 className={classes['homepage__section-heading']}>Espresso</h2>
                    <HorizontalContainer/>
                </section>
                <section>
                    <h2 className={classes['homepage__section-heading']}>High caffeine ratio</h2>
                    <HorizontalContainer/>
                </section>
                <div className={classes.homepage__padding}></div>
                {/*<Button behaviorFn={()=>{console.log('siema')}} variant='outline' disabled={false}>Test</Button>*/}
                {/*<Toast><span>I'm a wonderful toast!</span></Toast>*/}
                {/*{this.state.modalOpen && <Modal closeModalFn={this.closeModalHandler}><p>I'm a modal!</p></Modal>}*/}
            </main>
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home