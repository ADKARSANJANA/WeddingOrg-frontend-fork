import { Component } from "react";
import React from 'react';
import Weddate from "./Weddate";
import {Link} from 'react-router-dom';
import CustomerNavigation from './CustomerNavigation';


class Date extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      selectedDate:"2015-04-14"
    };
  }

  handleOnChange(event) {
    this.setState({
      selectedDate: event.target.value
    })
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