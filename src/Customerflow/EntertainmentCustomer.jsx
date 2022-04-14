import React, { Component } from 'react'
import entertainCustService from '../CustomerServices/entertainCustService';
import CustomerNavigation from './CustomerNavigation';
import {Link} from 'react-router-dom';

export default class EntertainmentCustomer extends Component {
    constructor(){
        super();
        this.state = {
        entertainments:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        }
        handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        if(target.checked){
        this.state.entertainments[value] = value;   
        }else{
        this.state.entertainments.splice(value, 1);
        }
        }
       
        componentDidMount(){
            entertainCustService.getEntertain().then((res) =>{
                this.setState({entertainments:res.data});
            });
        }
       addentertainment = (e) => {
            e.preventDefault();
            let entertainment= {entertainment:this.state.entertainments};
            console.log('entertainment =>' + JSON.stringify(entertainment));
             
           entertainCustService.addentertain(entertainment).then(res =>{
               this.props.history.push('/addentertainment')
             
    
            });
        }

        selectentertainment = () => {
           // e.preventDefault();
            let entertainment= {entertainment:this.state.entertainments};
            console.log('entertainment =>' + JSON.stringify(entertainment));
             
           entertainCustService.selectentertain(entertainment).then(res =>{
               this.props.history.push('/selectentertainment')
              
              
    
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
                            <th>Ent Name</th>
                            <th>Ent Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.entertainments.map(
                                entertainment =>
                                //key = {entertainment.id}
                                   <tr>  
                                       <td>{entertainment.id}</td>
                                       <td>{entertainment.entItem}</td>
                                       <td>{entertainment.price}</td>
                                       <td>
                                           
                                       <input className="center" type="checkbox" name="entertainments" id="inlineCheckboxh3" value="" onChange={this.handleInputChange} /> 
                                       </td>
                                   </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary" onClick={()=>this.selectentertainment()}>Submit</button>
                <Link to="/chome"><h5>Back</h5></Link>


                </div>

               </div>
      </div>
    )
  }
}
