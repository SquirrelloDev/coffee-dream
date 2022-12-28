import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BottomBar from "./components/navs/BottomBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppProvider from "./context/AppProvider";
class App extends React.Component {
  render(){
    return(
        <AppProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile' component={Profile}/>
                </Switch>
            </BrowserRouter>
        </AppProvider>


    )
  }
  }
export default App;
