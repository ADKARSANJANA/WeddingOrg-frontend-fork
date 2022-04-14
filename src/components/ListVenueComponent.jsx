import React, { Component } from 'react';
//import VenueService from '../Service/VenueServices';
import VenueService from '../services/VenueService';
//import { Button } from 'react-bootstrap';
import axios from 'axios';
import Navigation from './Navigation';


class ListVenueComponent extends Component {
 constructor(props){
     super(props)
     this.state={
         venues: []
     }
     this.addVenue = this.addVenue.bind(this)
     this.editVenue = this.editVenue.bind(this)
 }

 editVenue(id){
        this.props.history.push(`/editvenue/${id}`);
 }
  componentDidMount(){
      VenueService.getVenues().then((res) =>{
          this.setState({venues:res.data});
      });
 }
addVenue(){
    this.props.history.push('/addVenue')
    
}
deleteVenue = (id) => {
    axios.delete("http://localhost:8080/api/user/admin/deleteVenue/"+id)
        .then(response => {
           
            if(response.data != null) {
                
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    venues: this.state.venues.filter(venue => venue.id !== id)
                });
            } else {
                this.setState({"show":false});
            }
        });
};
    render() {
        return (
            <div>
                <Navigation/>
                <h2 className="text-center">Venue List</h2>
                  
                      <button  className="btn btn-primary" onClick={this.addVenue}style={{marginTop: "20px"}}>Add Venue</button>
    
                   <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Venue Name</th>
                                <th>Venue Rent</th>
                                <th>Venue City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.venues.map(
                                    venue =>
                                    //key = {venue.id}
                                       <tr>  
                                           <td>{venue.id}</td>
                                           <td>{venue.venueName}</td>
                                           <td>{venue.price}</td>
                                           <td>{venue.city}</td>
                                           <td>
                                               <button onClick= {() => this.editVenue(venue.id)} className="btn btn-info">Update</button>
                                               <button  className="btn btn-danger mx-2" onClick={this.deleteVenue.bind(this, venue.id)} >Delete</button>
                                           </td>
                                       </tr>
                                )
                            }
                        </tbody>
                    </table>

                   </div>
            </div>
        );
    }
}

export default ListVenueComponent;