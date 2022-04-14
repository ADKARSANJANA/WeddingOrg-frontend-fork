import React, { Component } from 'react'
import cateringCustService from '../CustomerServices/cateringCustService';
import CustomerNavigation from './CustomerNavigation'
import CustomerHome from './CustomerHomePage';
import { useHistory,Link } from 'react-router-dom';

export default class CateringCustomer extends Component {
    constructor(){
        super();
        this.state = {
        caterings:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        }
        handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        if(target.checked){
        this.state.caterings[value] = value;   
        }else{
        this.state.caterings.splice(value, 1);
        }
        }
       
        componentDidMount(){
            cateringCustService.getCaterings().then((res) =>{
                this.setState({caterings:res.data});
            });
        }
       addcatering = (e) => {
            e.preventDefault();
            let catering= {catering:this.state.caterings};
            console.log('catering =>' + JSON.stringify(catering));
             
           cateringCustService.addcatering(catering).then(res =>{
               this.props.history.push('/addcatering')
             
    
            });
        }

        selectcatering = () => {
           // e.preventDefault();
            let catering= {catering:this.state.caterings};
            console.log('catering =>' + JSON.stringify(catering));
             
           cateringCustService.selectcatering(catering).then(res =>{
               this.props.history.push('/selectcatering')
              
              
    
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
                                           
                                       <input className="center" type="checkbox" name="caterings" id="inlineCheckboxh3" value="" onChange={this.handleInputChange} /> 
                                       </td>
                                   </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary" onClick={()=>this.selectcatering()}>Submit</button>
                <Link to="/chome"><h5>Back</h5></Link>

                </div>

               </div>
      </div>
    )
  }
}
