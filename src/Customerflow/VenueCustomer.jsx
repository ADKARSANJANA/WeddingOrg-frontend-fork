import React, { Component } from 'react'
import venueCustService from '../CustomerServices/venueCustService';
import CustomerNavigation from './CustomerNavigation';
import {Link} from 'react-router-dom';

export default class VenueCustomer extends Component {
    constructor(){
        super();
        this.state = {
        venues:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        }
        handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        if(target.checked){
        this.state.venues[value] = value;   
        }else{
        this.state.venues.splice(value, 1);
        }
        }
       
        componentDidMount(){
            venueCustService.getVenues().then((res) =>{
                this.setState({venues:res.data});
            });
        }
       addvenue = (e) => {
            e.preventDefault();
            let venue= {venue:this.state.venues};
            console.log('venue =>' + JSON.stringify(venue));
             
           venueCustService.addvenue(venue).then(res =>{
               this.props.history.push('/addvenue')
             
    
            });
        }

        selectvenue = () => {
           // e.preventDefault();
            let venue= {venue:this.state.venues};
            console.log('venue =>' + JSON.stringify(venue));
             
           venueCustService.selectvenue(venue).then(res =>{
               this.props.history.push('/selectvenue')
              
              
    
            });
        }


  render() {
    return (
      <div>
          <CustomerNavigation/>
          <h2 className="text-center">Select your items</h2>
                  
                 

               <div className="row"   style={{marginTop:"100px"}}>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>Serial No</th>
                            <th>Venue Name</th>
                            <th>Venue Price</th>
                            <th>City</th>
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
                                           
                                       <input className="center" type="checkbox" name="venues" id="inlineCheckboxh3" value="" onChange={this.handleInputChange} /> 
                                       </td>
                                   </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary" onClick={()=>this.selectvenue()}>Submit</button>
                <Link to="/chome"><h5>Back</h5></Link>

                </div>

               </div>
      </div>
    )
  }
}
