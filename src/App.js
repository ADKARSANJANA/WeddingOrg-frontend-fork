import logo from './logo.svg';
import React from 'react';
import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
import Signin from './User/Signin';
import SignUp from './User/Signup';
import CustomerHome from './Customer/CustomerHomePage';
import AdminHome from './Admin/AdminHomePage';
import Date from './CustomerFlow/Date'
function App() {
  return (
    <div>
      <Router>
      <div className = "container">
        <Navigation/>
        <Switch>
        <Route path="/" exact component={Signin}></Route>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route
              path="/home"
              component={CustomerHome}
            ></Route>
            <Route
              path="/admin"
              component={Home}
            ></Route>            
          
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
          <Route path = "/date" component={Date}></Route>
          
          
        </Switch>
      </div> 
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
