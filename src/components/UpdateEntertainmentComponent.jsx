import React, { Component } from 'react';
import EntertainmentService from '../services/EntertainmentService';
import Navigation from './Navigation';
import MyToast from '../components/MyToast';

class UpdateEntertainmentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            entItem: '',
            price: '',
            showToast: false,
            toastMessage: ''
        }
        this.changeEntertainmentNameHandler = this.changeEntertainmentNameHandler.bind(this); 
        this.changeEntertainmentPriceHandler = this.changeEntertainmentPriceHandler.bind(this);
        this.updateEntertainment = this.updateEntertainment.bind(this);
    }

    componentDidMount(){
        EntertainmentService.getEntertainmentById(this.state.id).then((res) => {
            let entertainment = res.data;
            this.setState({
                entItem: entertainment.entItem,
                price: entertainment.price
            });
        }).catch(err => {
            console.error("Error fetching entertainment:", err);
            this.setState({toastMessage: 'Failed to load entertainment', showToast: true});
        });
    }

    updateEntertainment = (e) => {
        e.preventDefault();
        let entertainment = { entItem: this.state.entItem, price: this.state.price };
        console.log('entertainment =>', JSON.stringify(entertainment));

        // Call backend to update
        EntertainmentService.updateEntertainment(entertainment, this.state.id)
            .then(res => {
                this.setState({toastMessage: 'Entertainment Updated Successfully', showToast: true}, () => {
                    // Navigate after a short delay to show toast
                    setTimeout(() => {
                        this.props.history.push('/entertainments');
                    }, 1000);
                });
            })
            .catch(err => {
                console.error("Update failed:", err);
                this.setState({toastMessage: 'Update Failed', showToast: true});
            });
    }

    changeEntertainmentNameHandler = (event) => {
        this.setState({ entItem: event.target.value });
    }

    changeEntertainmentPriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }
    
    cancel = () => {
        this.props.history.push('/entertainments');
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3" style={{marginTop: "100px"}}>
                            <h3 className="text-center">Update Entertainment</h3>
                            <div className="card-body">
                                {this.state.showToast && <MyToast message={this.state.toastMessage} />}
                                <form>
                                    <div className="form-group">
                                        <label>Entertainment Name: </label>
                                        <input placeholder="Entertainment Name" name="entItem" className="form-control"
                                            value={this.state.entItem} onChange={this.changeEntertainmentNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Entertainment Price: </label>
                                        <input placeholder="Entertainment Price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changeEntertainmentPriceHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEntertainment} style={{marginTop: "10px"}}>
                                        Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px", marginTop: "10px"}}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEntertainmentComponent;
