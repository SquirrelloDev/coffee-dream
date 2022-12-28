import {AppContext} from "./app-context";
import React from "react";

class AppProvider extends React.Component{
    appCtx;
    constructor(props) {
        super(props);
        this.appCtx = {
            currentPage: 'home'
        }
    }

    render() {
        return (
        <AppContext.Provider value={this.appCtx}>{this.props.children}</AppContext.Provider>
        );
    }
}
export default AppProvider;