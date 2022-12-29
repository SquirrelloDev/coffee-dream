import React from "react";
import BottomBar from "../components/navs/BottomBar";
import Card from "../components/UI/Card";
import HorizontalContainer from "../components/UI/HorizontalContainer";
import classes from "./Home.module.scss";
import Button from "../components/UI/Button";
class Home extends React.Component{
    render() {
        return(
            <React.Fragment>
            <main className={classes.homepage}>
                <h1 className={classes.homepage__heading}>Hello Derek!</h1>
                <h2 className={classes['homepage__section-heading']}>Popular</h2>
                <HorizontalContainer/>
                <h2 className={classes['homepage__section-heading']}>Arabica selection</h2>
                <HorizontalContainer/>
                <h2 className={classes['homepage__section-heading']}>Espresso</h2>
                <HorizontalContainer/>
                <h2 className={classes['homepage__section-heading']}>High caffeine ratio</h2>
                <HorizontalContainer/>
                <Button behaviorFn={()=>{console.log('siema')}} variant='outline' disabled={false}>Test</Button>
            </main>
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home