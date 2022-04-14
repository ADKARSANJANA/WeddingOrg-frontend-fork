import React, { Component } from 'react';
//import decorService from '../Service/decorServices';
import DecorService from '../services/DecorService';
//import { Button } from 'react-bootstrap';
import axios from 'axios';
import Navigation from './Navigation';


class ListDecorComponents extends Component {
 constructor(props){
     super(props)
     this.state={
         decors: []
     }
     this.addDecor = this.addDecor.bind(this)
     this.editDecor = this.editDecor.bind(this)
 }

 editDecor(id){
        this.props.history.push(`/editDecor/${id}`);
 }
  componentDidMount(){
    DecorService.getDecors().then((res) =>{
          this.setState({decors:res.data});
      });
 }
addDecor(){
    this.props.history.push('/addDecor')
    
}
deleteDecor = (id) => {
    axios.delete("http://localhost:8080/api/user/admin/deleteDecor/"+id)
        .then(response => {
            if(response.data != null) {
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    decors: this.state.decors.filter(decor => decor.id !== id)
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
                <h2 className="text-center">Decor List</h2>
                  
                      <button  className="btn btn-primary" onClick={this.addDecor} style={{marginTop: "20px"}}>Add Decor</button>
    
                   <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Decor Name</th>
                                <th>Decor Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.decors.map(
                                    decor =>
                                    //key = {decor.id}
                                       <tr>  
                                           <td>{decor.id}</td>
                                           <td>{decor.decorItem}</td>
                                           <td>{decor.price}</td>
                                           <td>
                                               <button onClick= {() => this.editDecor(decor.id)} className="btn btn-info">Update</button>
                                               <button  className="btn btn-danger mx-2" onClick={this.deleteDecor.bind(this, decor.id)}>Delete</button>
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

export default ListDecorComponents;