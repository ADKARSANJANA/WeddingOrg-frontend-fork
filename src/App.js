import logo from './logo.svg';
import React from 'react';
import './App.css';
import Date from './Customerflow/Date';
import  {BrowserRouter as Router, Route, Switch,Routes} from 'react-router-dom';
import ListCateringComponents from './components/ListCateringComponents';
import CreateCateringComponent from './components/CreateCateringComponent';
import Updatecateringcomponent from './components/UpdateCateringComponent';
import Navigation from './components/Navigation';
import ListDecorComponents from './components/ListDecorComponent';
import CreateDecorComponent from './components/CreateDecorComponent';
import UpdateDecorcomponent from './components/UpdateDecorComponent'; 
import CreateVenueComponent from './components/CreateVenueComponent';
import ListVenueComponent from './components/ListVenueComponent';
import UpdateVenueComponent from './components/UpdateVenueComponent';
import ListEntertainmentComponents from './components/ListEntertainmentComponents';
import CreateEntertainmentComponent from './components/CreateEntertainmentComponent';
import UpdateEntertainmentComponent from './components/UpdateEntertainmentComponent';
import Footer from './components/Footer';
import Home from './components/Home';
import Chome from './Customerflow/Chome';
import CateringCustomer from './Customerflow/CateringCustomer';
import DecorCustomer from './Customerflow/DecorCustomer';
import Signin from './User/Signin';
import SignUp from './User/Signup';
import CustomerHome from './Customerflow/CustomerHomePage';
import EntertainmentCustomer from './Customerflow/EntertainmentCustomer';
import VenueCustomer from './Customerflow/VenueCustomer';
import CustomerSelections from './Customerflow/CustomerSelections';


import AdminHome from './Admin/AdminHomePage';

function App() {
  return (
    <div>
      <Router>
      <div className = "container">
        
        <Switch>
        <Route path="/" exact component={Signin}></Route>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route
              path="/chome"
              component={CustomerHome}
            ></Route>
            <Route
              path="/admin"
              component={Home}
            ></Route>  
        
          {/* <Route path = "/" exact component = {Home}></Route> */}
          <Route path = "/caterings" component = {ListCateringComponents}></Route>
          <Route path = "/addCatering" component = {CreateCateringComponent}></Route>
          <Route path = "/editCatering/:id" component={Updatecateringcomponent}></Route>
          <Route path = "/" exact component = {ListDecorComponents}></Route>
          <Route path = "/decors" component = {ListDecorComponents}></Route>
          <Route path = "/addDecor" component = {CreateDecorComponent}></Route>
          <Route path = "/editDecor/:id" component={UpdateDecorcomponent}></Route>
          <Route path = "/" exact component = {ListVenueComponent}></Route>
          <Route path = "/allVenues" component = {ListVenueComponent}></Route>
          <Route path = "/addvenue" component = {CreateVenueComponent}></Route>
          <Route path = "/editvenue/:id" component={UpdateVenueComponent}></Route>
          <Route path = "/entertainments" component = {ListEntertainmentComponents}></Route>
          <Route path = "/addEntertainment" component = {CreateEntertainmentComponent}></Route>
          <Route path = "/editEntertainment/:id" component={UpdateEntertainmentComponent}></Route>
          <Route path = "/date"component={Date}></Route>     
          <Route path= "/chome" exact component = {Chome}></Route>
          <Route path= "/catering" exact component = {CateringCustomer}></Route>   
          <Route path= "/decor" exact component = {DecorCustomer}></Route> 
          <Route path= "/entertainment" exact component = {EntertainmentCustomer}></Route> 
          <Route path= "/venue" exact component = {VenueCustomer}></Route>
          <Route
              path="/cart"
              component={CustomerSelections}
            ></Route>
        </Switch>
      </div> 
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
