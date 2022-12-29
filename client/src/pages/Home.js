import React from "react";
import BottomBar from "../components/navs/BottomBar";
import Card from "../components/UI/Card";

class Home extends React.Component{
    render() {
        return(
            <React.Fragment>
                <p>Jebany derek i jego podejście do komponentów funkcyjnych</p>
                <Card><p>Test</p></Card>
                <BottomBar/>
            </React.Fragment>
        )
    }
}
export default Home