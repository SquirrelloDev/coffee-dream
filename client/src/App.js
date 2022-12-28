import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
class App extends React.Component {
  render(){
    return(

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route path='*' component={Home}/>
                </Switch>
            </BrowserRouter>


    )
  }
  }
export default App;
