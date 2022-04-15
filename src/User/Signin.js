import axios from 'axios'
import react,{Component} from 'react';
import React from 'react';
import { useState } from "react";
import SigninImg from '../Customer/Images/wed1.jpg';
import CateringService from '../services/CateringService';
import { useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import UserSignUpLoginService from '../services/UserSignUpLoginService';
import Chome from  '../Customerflow/Chome';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();
   
    
    

    const signinUser = () => {
        if (email.length === 0) {
            alert('please enter email')
        } else if (password.length === 0) {
            alert('please enter password')
        } else {
            UserSignUpLoginService.login({'email':email,'password':password}).then(res =>{
              console.log(res.status);
              if(res.status === 200 || res.status === 201){
               localStorage.setItem('user',res.data);
               
               
                 if(res.data.email === "suyog18@gmail.com"){
                  // navigate("/chome");
                  history.push("/admin");
                }else{
                  history.push("/chome");
                  //navigate("/admin");
                }
              }else{
                alert('login failed');
              }             
              console.log(localStorage.getItem('user'));
           });
        }


    }

    return (
      
      <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                 <center>
                  <img align="middle" height="100px"
                      src={SigninImg}
                      // src="https://th.bing.com/th/id/OIP.xv5Wdkd4L3EDlxbqrsoylgHaLH?pid=ImgDet&rs=1"
                    //src="https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138550014.jpg"
                    alt="login form"
                    className="img-fluid"
                  />
                  </center>
                </div>
                <div  className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
    
                    <form>
                      <h3 className="fw-normal mb-3 pb-3"><b>USER SIGN IN . . .</b> </h3>
    
                      <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example17" 
                                >Email address</label>
                        <input className="email" id="form2Example17" class="form-control form-control-lg" 
                        onChange={(e)=>{
                          setEmail(e.target.value);
                      }} />
                       
                      </div>
    
                      <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example27" 
                        >Password</label>
                        <input  type="password" id="form2Example27" class="form-control form-control-lg" 
                         onChange={(e)=>{
                         setPassword(e.target.value);
                          }}/>
                       
                      </div>
    
                      <div className="pt-1 mb-4">
                        <button onClick={signinUser} className="btn btn-success" type="button">Login</button>
                      </div>
    
                      <a className="small text-muted" href="forgotPassword">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" >Don't have an account? <a href="signup">Register here</a></p>
                      
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   )
                                                                     
}

export default Signin;
