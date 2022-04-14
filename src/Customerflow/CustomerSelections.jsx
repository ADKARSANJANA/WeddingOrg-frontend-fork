import React, { Component } from "react";
//import CateringService from '../Service/CateringServices';
import CateringService from "../services/CateringService";
import DecorService from "../services/DecorService";
import EntertainmentService from "../services/EntertainmentService";
//import { Button } from 'react-bootstrap';
import axios from "axios";

class CustomerSelections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caterings: [],
      decors: [],
      entertains: [],
    };
    this.deleteCatering = this.deleteCatering.bind(this);
    this.deleteEntertainment = this.deleteEntertainment.bind(this);
    this.deleteDecor = this.deleteDecor.bind(this);
  }

  deleteCatering = (id) => {    
      CateringService.deleteSelectedCatering(id).then((res) =>{
        this.setState({
          caterings: this.state.caterings.filter(catering => catering.id !== id)
      });
    });
  };

  deleteEntertainment = (id) => {
    EntertainmentService.deleteSelectedEntertainment(id).then((res) =>{
      this.setState({
        entertains: this.state.entertains.filter(entertain => entertain.id !== id)
    });
  });
  };

  deleteDecor = (id) => {
    DecorService.deleteSelectedDecor(id).then((res) =>{
      this.setState({
        decors: this.state.decors.filter(decor => decor.id !== id)
    });
  });
  };

  componentDidMount() {
    CateringService.getCustomerDetailsById(2).then((res) => {
      console.log(res.data.data.caterings[0].catMenu);
      this.setState({ 
        caterings: res.data.data.caterings,
        decors: res.data.data.decors,
        entertains: res.data.data.entertains,
       });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Selected Catering List</h2>

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
              {this.state.caterings.map((catering) => (
                //key = {catering.id}
                <tr>
                  <td>{catering.catMenu.id}</td>
                  <td>{catering.catMenu.foodItem}</td>
                  <td>{catering.catMenu.price}</td>
                  <td>
                    <button
                      onClick={() => this.deleteCatering(catering.id)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr/>
        <h2 className="text-center">Selected Decor List</h2>
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
              {this.state.decors.map((decor) => (
                //key = {catering.id}
                <tr>
                  <td>{decor.decMenu.id}</td>
                  <td>{decor.decMenu.decorItem}</td>
                  <td>{decor.decMenu.price}</td>
                  <td>
                    <button
                      onClick={() => this.deleteDecor(decor.id)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr/>
        <h2 className="text-center">Selected Entertainment List</h2>

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
              {this.state.entertains.map((entertainment) => (
                //key = {catering.id}
                <tr>
                  <td>{entertainment.entMenu.id}</td>
                  <td>{entertainment.entMenu.entItem}</td>
                  <td>{entertainment.entMenu.price}</td>
                  <td>
                    <button
                      onClick={() => this.deleteEntertainment(entertainment.id)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CustomerSelections;
