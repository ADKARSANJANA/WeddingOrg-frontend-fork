import React, { Component } from 'react';
import DecorService from '../services/DecorService';
import Navigation from './Navigation';

class UpdateDecorcomponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            decorItem: '',
            price: ''
        }
        this.changeDecorNameHandler = this.changeDecorNameHandler.bind(this); 
        this.changeDecorPriceHandler = this.changeDecorPriceHandler.bind(this);
        this.updateDecor= this.updateDecor.bind(this);
    }
    componentDidMount(){
         DecorService.getDecorById(this.state.id).then((res) =>{
             let decor = res.data;
             this.setState({decorItem: decor.decorItem,
                            price: decor.price
             });
         });
     }
    updateDecor = (e) => {
        e.preventDefault();
        let decor = {decorItem: this.state.decorItem, price :this.state.price};
        console.log('decor =>' + JSON.stringify(decor));
        alert("Decor Updated Successfully");

        DecorService.updateDecor(decor,this.state.id).then(res => {
        this.props.history.push('/decors')
        });
    }

    changeDecorNameHandler = (event)=> {
        this.setState({decorItem: event.target.value})
    }

    changeDecorPriceHandler= (event)=> {
        this.setState({price: event.target.value})
    }
    
    cancel(){
        this.props.history.push('/decors')
        
    }
    decorList = () => {
        return this.props.history.push("/decors");
    }
    render() {
        return (
            <div>
                <Navigation/>
              <div className="container">
                  <div className="row">
                      <div className= "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "100px"}}>
                          <h3 className="text-center">Update Decor</h3>
                          <div className= "card-body">
                             <form>
                                 <div className= "form-group">
                                 <label>Decor name: </label>
                                 <input placeholder="Decor Name" name="decorItem" className="form-control"
                                  value={this.state.decorItem} onChange={this.changeDecorNameHandler}/>
                                 </div>
                                 <div className= "form-group">
                                 <label>Decor Price: </label>
                                 <input placeholder="Decor Price" name="price" className="form-control"
                                  value={this.state.price} onChange={this.changeDecorPriceHandler}/>
                                 </div>

                                 <button className="btn btn-success" onClick={this.updateDecor}  style={{marginTop: "10px"}}>Save</button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>
                                 <button size="sm" className="btn btn-info" type="button" onClick={this.decorList.bind()} style={{marginLeft: "10px" ,marginTop: "10px"}}> List</button>
                             </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
export default UpdateDecorcomponent;
