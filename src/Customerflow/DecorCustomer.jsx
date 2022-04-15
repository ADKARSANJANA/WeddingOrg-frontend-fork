import React, { Component } from 'react'
import decorCustService from '../CustomerServices/decorCustService';
import CustomerNavigation from './CustomerNavigation'
import {Link} from 'react-router-dom';

export default class DecorCustomer extends Component {
    constructor(){
        super();
        this.state = {
        decors:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        }
        handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        if(target.checked){
        this.state.decors[value] = value;   
        }else{
        this.state.decors.splice(value, 1);
        }
        }
       
        componentDidMount(){
            decorCustService.getDecor().then((res) =>{
                this.setState({decors:res.data});
            });
        }
       adddecor = (e) => {
            e.preventDefault();
            let decor= {decor:this.state.decors};
            console.log('decor =>' + JSON.stringify(decor));
             
           decorCustService.adddecor(decor).then(res =>{
               this.props.history.push('/adddecor')
             
    
            });
        }

        selectdecor = () => {
           // e.preventDefault();
            let decor= {decor:this.state.decors};
            console.log('decor =>' + JSON.stringify(decor));
            alert("Decor Items added Successfully")
           decorCustService.selectdecor(decor).then(res =>{
               this.props.history.push('/selectdecor')
              
              
    
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
                                           
                                       <input className="center" type="checkbox" name="decors" id="inlineCheckboxh3" value="" onChange={this.handleInputChange} /> 
                                       </td>
                                   </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary" onClick={()=>this.selectdecor()}>Submit</button>
                <Link to="/chome"><h5>Back</h5></Link>


                </div>

               </div>
      </div>
    )
  }
}
