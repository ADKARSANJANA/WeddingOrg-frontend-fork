import React, { Component } from 'react';
//import CateringService from '../Service/CateringServices';
import CateringService from '../services/CateringService';
import Navigation from './Navigation';
//import { Button } from 'react-bootstrap';
import axios from 'axios';



class ListCateringComponents extends Component {
 constructor(props){
     super(props)
     this.state={
         caterings: []
     }
     this.addCatering = this.addCatering.bind(this)
     this.editCatering = this.editCatering.bind(this)
 }

 editCatering(id){
        this.props.history.push(`/editCatering/${id}`);
 }
  componentDidMount(){
      CateringService.getCaterings().then((res) =>{
          this.setState({caterings:res.data});
      });
 }
addCatering(){
    this.props.history.push('/addCatering')
    
}
deleteCatering = (id) => {
    axios.delete("http://localhost:8080/api/user/admin/deleteCatering/"+id)
        .then(response => {
            if(response.data != null) {
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    caterings: this.state.caterings.filter(catering => catering.id !== id)
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
                <h2 className="text-center">Catering List</h2>
                  
                      <button  className="btn btn-primary" onClick={this.addCatering} style={{marginTop: "20px"}}>Add Catering</button>
    
                   <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Food Name</th>
                                <th>Food Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.caterings.map(
                                    catering =>
                                    //key = {catering.id}
                                       <tr>  
                                           <td>{catering.id}</td>
                                           <td>{catering.foodItem}</td>
                                           <td>{catering.price}</td>
                                           <td>
                                               <button onClick= {() => this.editCatering(catering.id)} className="btn btn-info">Update</button>
                                               <button  className="btn btn-danger mx-2" onClick={this.deleteCatering.bind(this, catering.id)} >Delete</button>
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

export default ListCateringComponents;