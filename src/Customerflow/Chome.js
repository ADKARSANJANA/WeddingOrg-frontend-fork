import React, { Component } from 'react';
import {  Link } from "react-router-dom";
//import Wedding2 from './Wedding2.jpg';
import Weddate from "./Weddate";
import { Card } from 'react-bootstrap';
class Chome extends Component {
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
            <div>
               {/* <img src={Wedding2} alt="wedding" style={{
                position: 'absolute', left:0}}height="1100px" widtht="800px"/>; */}
            <div class= "centered" style = {{marginTop:"80px"}}>
            <h1><b>Welcome To Wedding Organizer</b></h1>
            <li>
           <Link to="/catering">Logout</Link>
            </li>
            
            <div  className="col-md-6" >
              <h3>Select date for wedding</h3>
              <Weddate selectedValue={this.state.selectedDate} onChange={this.handleOnChange}/>
              <br/>
              <h5>Selected Date: {this.state.selectedDate}</h5>

        </div>
        <div>
        <Link to="/catering">Select Catering</Link>

        </div>
            
            </div>

            </div>
        );
    }
}

export default Chome;
