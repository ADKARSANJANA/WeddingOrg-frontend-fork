import React, { useState,Component } from 'react';
import axios from 'axios';
import { useReducer } from 'react';

class Date extends Component {
    constructor(props){
        super(props)
        this.state={
           date: '',
           id: ''
           
        }
        this.saveDate=this.saveDate.bind(this)
    }

    saveDate = (e) => {
        e.preventDefault();
        let date = this.state.date
        console.log('date =>' + JSON.stringify(date));

        axios.post("http://localhost:8080/api/user/customer/selectdate").then(res =>{
           this.props.history.push('/caterings')
        });
    }

    //  handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = {
    //       flightId: flightId,
    //       passenger: {
    //         firstName: firstName,
    //         lastName: lastName,
    //         middleName: middleName,
    //         email: email,
    //         phone: phone,
    //       },
    //     };

    render() {
        
        return (
            <div className="main" style={{marginTop: "100px"}}>
                <h2>Select Booking Date</h2>
                <form>
                <input type="date" />
                <button type="submit" onClick={this.saveDate}>Submit</button>
                </form>

            </div>
        );
    }
}

export default Date;