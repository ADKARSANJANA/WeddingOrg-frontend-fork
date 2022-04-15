import { Link } from "react-router-dom"
import React from 'react';
const Logout =()=> {
    localStorage.setItem("user",'');
    return(
        <section>
        <div className="container">
            <h3>Thank You For Trusting Us</h3>
            <h2>Visit Again !!!</h2>
        </div>
        <div>
            <Link to="/signin">
            <button className="btn btn-success">Signin Here</button>
            </Link>
        </div>
        <div>
            <Link to="localhost:3000/">
            <button className="btn btn-danger">Logout  Here</button>
            </Link>
        </div>
       
        </section>
        
    )
}
export default Logout