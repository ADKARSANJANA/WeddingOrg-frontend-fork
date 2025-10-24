import React, { Component } from 'react';
import cateringCustService from '../CustomerServices/cateringCustService';
import CustomerNavigation from './CustomerNavigation';
import MyToast from '../components/MyToast';
import { Link } from 'react-router-dom';

export default class CateringCustomer extends Component {
  constructor() {
    super();
    this.state = {
      caterings: [],
      selectedCaterings: [],
      showToast: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const { selectedCaterings } = this.state;

    if (event.target.checked) {
      this.setState({ selectedCaterings: [...selectedCaterings, value] });
    } else {
      this.setState({
        selectedCaterings: selectedCaterings.filter(item => item !== value)
      });
    }
  }

  componentDidMount() {
    cateringCustService.getCaterings().then((res) => {
      this.setState({ caterings: res.data });
    });
  }

  selectCatering = () => {
    const catering = { catering: this.state.selectedCaterings };
    console.log('catering =>' + JSON.stringify(catering));

    cateringCustService.selectcatering(catering).then(res => {
      // ✅ Show toast after successful action
      this.setState({ showToast: true });
    });
  }

  render() {
    return (
      <div>
        <CustomerNavigation/>
        <h2 className="text-center">Select your items</h2>

        <div className="row" style={{ marginTop: "100px" }}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th style={{ textAlign:"center" }}>Serial No</th>
                <th>Food Name</th>
                <th>Food Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.caterings.map((catering, index) =>
                <tr key={catering.id}>  
                  <td>{catering.id}</td>
                  <td>{catering.foodItem}</td>
                  <td>{catering.price}</td>
                  <td>
                    <input
                      type="checkbox"
                      value={catering.foodItem}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="col-md-12 text-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.selectCatering}
            >
              Submit
            </button>
            <Link to="/chome"><h5>Back</h5></Link>
          </div>
        </div>

        {/* ✅ Toast */}
        <MyToast
          show={this.state.showToast}
          type="success"
          message="Catering Items added Successfully"
          onClose={() => this.setState({ showToast: false })}
        />
      </div>
    );
  }
}
