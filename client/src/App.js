import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Shipment from "./pages/Shipment";
import SignUp from "./pages/SignUp";
class App extends React.Component {
  render(){
    return(

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/product/:id' component={ProductPage}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/shipment' component={Shipment}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route path='*' component={Home}/>
                </Switch>
            </BrowserRouter>


    )
  }
  }
export default App;
