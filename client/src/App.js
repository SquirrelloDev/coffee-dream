import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Shipment from "./pages/Shipment";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ConfirmationPage from "./pages/ConfirmationPage";
import OrdersPage from "./pages/OrdersPage";
import AccountSettings from "./pages/AccountSettings";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
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

                    <Route exact path='/users' component={Users}/>
                    <Route exact path='/newuser' component={NewUser}/>
                    <Route exact path='/products' component={NewProduct}/>
                    <Route exact path='/products/product/:id' component={EditProduct}/>
                    <Route path='*' component={Home}/>
                </Switch>
            </BrowserRouter>


    )
  }
  }
export default App;
