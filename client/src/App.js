import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Shipment from "./pages/Shipment";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Confirmation from "./pages/Confirmation";
import ConfirmationPage from "./pages/ConfirmationPage";
import OrdersPage from "./pages/OrdersPage";
import AccountSettings from "./pages/AccountSettings";
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
                    <Route exact path='/login' component={LogIn}/>
                    <Route exact path='/success' component={ConfirmationPage}/>
                    <Route exact path='/orders' component={OrdersPage}/>
                    <Route exact path='/settings' component={AccountSettings}/>
                    <Route path='*' component={Home}/>
                </Switch>
            </BrowserRouter>


    )
  }
  }
export default App;
