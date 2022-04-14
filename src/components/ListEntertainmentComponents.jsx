import React, { Component } from 'react';
//import CateringService from '../Service/CateringServices';
import EntertainmentService from '../services/EntertainmentService';
//import { Button } from 'react-bootstrap';
import axios from 'axios';
import Navigation from './Navigation';


class ListEntertainmentComponents extends Component {
 constructor(props){
     super(props)
     this.state={
         entertainments: []
     }
     this.addEntertainment = this.addEntertainment.bind(this)
     this.editEntertainment = this.editEntertainment.bind(this)
 }

 editEntertainment(id){
        this.props.history.push(`/editEntertainment/${id}`);
 }
  componentDidMount(){
    EntertainmentService.getEntertainments().then((res) =>{
          this.setState({entertainments:res.data});
      });
 }
addEntertainment(){
    this.props.history.push('/addEntertainment')
    
}
deleteEntertainment = (id) => {
    axios.delete("http://localhost:8080/api/user/admin/deleteEntertainment/"+id)
        .then(response => {
            if(response.data != null) {
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    entertainments: this.state.entertainments.filter(entertainment => entertainment.id !== id)
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
                <h2 className="text-center">Entertainment List</h2>
                  
                      <button  className="btn btn-primary" onClick={this.addEntertainment} style={{marginTop: "20px"}}>Add Entertainment</button>
    
                   <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Entertainment Name</th>
                                <th>Entertainment Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.entertainments.map(
                                    entertainment =>
                                    //key = {catering.id}
                                       <tr>  
                                           <td>{entertainment.id}</td>
                                           <td>{entertainment.entItem}</td>
                                           <td>{entertainment.price}</td>
                                           <td>
                                               <button onClick= {() => this.editEntertainment(entertainment.id)} className="btn btn-info">Update</button>
                                               <button  className="btn btn-danger mx-2" onClick={this.deleteEntertainment.bind(this, entertainment.id)} >Delete</button>
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

export default ListEntertainmentComponents;