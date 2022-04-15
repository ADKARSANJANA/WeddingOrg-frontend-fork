import { Component } from "react";
import React from 'react';
import Weddate from "./Weddate";
import {Link} from 'react-router-dom';
import CustomerNavigation from './CustomerNavigation';
import axios from 'axios';


class Date extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.saveDate = this.saveDate.bind(this);
    this.state = {
      selectedDate:"2015-04-14"
    };
  }

  handleOnChange(event) {
    this.setState({
      selectedDate: event.target.value
    })
  }
  saveDate = (e) => {
    e.preventDefault();
    let date = this.state.date
    console.log('date =>' + JSON.stringify(date));
    console.log(localStorage.getItem('user'))
    alert("Date Submitted Succesfully")


    axios.post("http://localhost:8080/api/user/customer/selectdate",localStorage.getItem('user')).then(res =>{
     
        
       this.props.history.push('/chome')
    });
}
  render() {
    return (
      <div className="container-fluid">
         <CustomerNavigation/>
        <div style={{marginTop:"100px"}}>
          <div className="row">
            <div className="col-md-12 offset-md-3">
              <h3>Select date for wedding</h3>
              <Weddate selectedValue={this.state.selectedDate} onChange={this.handleOnChange}/>
              <button onClick={this.saveDate}>Submit</button>

              <br/>
              <h5>Selected Date: {this.state.selectedDate}</h5>
            </div>
            <Link to="/chome"><h5>Back</h5></Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Date;