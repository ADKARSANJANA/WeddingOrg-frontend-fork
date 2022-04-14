import React, { Component } from 'react';
import VenueService from '../services/VenueService';

class UpdateVenueComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            venueName: '',
            price: '',
            city: ''
        }
        this.changeVenueNameHandler = this.changeVenueNameHandler.bind(this); 
        this.changeVenuePriceHandler = this.changeVenuePriceHandler.bind(this);
        this.changeVenueCityHandler = this.changeVenueCityHandler.bind(this);
        this.updateVenue= this.updateVenue.bind(this);
    }
    componentDidMount(){
         VenueService.getVenueById(this.state.id).then((res) =>{
             let venue = res.data;
             this.setState({venueName: venue.venueName,
                            price: venue.price,
                            city: venue.city
             });
         });
     }
    updateVenue = (e) => {
        e.preventDefault();
        let venue = {venueName: this.state.venueName, price :this.state.price, city: this.state.city};
        console.log('venue =>' + JSON.stringify(venue));

        VenueService.updateVenue(venue,this.state.id).then(res => {
        this.props.history.push('/allVenues')
        });
    }

    changeVenueCityHandler= (event)=> {
        this.setState({city: event.target.value})
    }

    changeVenueNameHandler = (event)=> {
        this.setState({venueName: event.target.value})
    }

    changeVenuePriceHandler= (event)=> {
        this.setState({price: event.target.value})
    }
    
    cancel(){
        this.props.history.push('/allVenues')
        
    }
    venueList = () => {
        return this.props.history.push("/allVenues");
    }
    render() {
        return (
            <div>
              <div className="container">
                  <div className="row">
                      <div className= "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "100px"}}>
                          <h3 className="text-center">Update Venue</h3>
                          <div className= "card-body">
                             <form>
                                 <div className= "form-group">
                                 <label>Venue name: </label>
                                 <input placeholder="Venue Name" name="venueName" className="form-control"
                                  value={this.state.venueName} onChange={this.changeVenueNameHandler}/>
                                 </div>
                                 <div className= "form-group">
                                 <label>Venue Rent: </label>
                                 <input placeholder="Venue Rent" name="price" className="form-control"
                                  value={this.state.price} onChange={this.changeVenuePriceHandler}/>
                                 </div>
                                 <div className= "form-group">
                                 <label>City: </label>
                                 <input placeholder="City" name="city" className="form-control"
                                  value={this.state.city} onChange={this.changeVenueCityHandler}/>
                                 </div>

                                 <button className="btn btn-success" onClick={this.updateVenue}  style={{marginTop: "10px"}}>Save</button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>
                                 <button size="sm" className="btn btn-info" type="button" onClick={this.venueList.bind()} style={{marginLeft: "10px" ,marginTop: "10px"}}> List</button>
                             </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
export default UpdateVenueComponent;