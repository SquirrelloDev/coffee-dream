import React from "react";
import BottomBar from "../components/navs/BottomBar";
import Card from "../components/UI/Card";
import HorizontalContainer from "../components/UI/HorizontalContainer";

class Home extends React.Component{
    render() {
        return(
            <React.Fragment>
                <p>Jebany derek i jego podejście do komponentów funkcyjnych</p>
                <HorizontalContainer/>
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home