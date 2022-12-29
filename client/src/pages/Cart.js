import React from "react";
import BottomBar from "../components/navs/BottomBar";
import TopBar from "../components/navs/TopBar";

class Cart extends React.Component{
    render() {
        return (
            <div>
                <TopBar/>
                <p>GIGA KOSZYK!</p>
                <BottomBar/>
            </div>
        );
    }
}
export default Cart