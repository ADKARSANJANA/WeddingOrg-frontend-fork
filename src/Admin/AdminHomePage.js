import ListCateringComponents from "../components/ListCateringComponents";
import ListEntertainmentComponents from "../components/ListEntertainmentComponents";
import React from 'react';
import { useHistory } from 'react-router-dom';
import SigninImg from '../Customer/Images/wed1.jpg';
import { render } from "react-dom";

const AdminHome=()=>{
  const history = useHistory();

  const viewCaterings = () => {history.push('/caterings')};
  const viewDecors = () => {history.push('/decors')};
  const viewEntertains = () => {history.push('/entertainments')};
 
    return(
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
                      <h3 className="fw-normal mb-3 pb-3"><b>ADMIN HOME PAGE . . .</b> </h3>
    
                      
    
                      <div className="pt-1 mb-4">
                        <button onClick={viewCaterings} className="btn btn-success" type="button">View Caterings</button>
                      </div>
                      <div className="pt-1 mb-4">
                        <button onClick={viewDecors} className="btn btn-success" type="button">View Decors</button>
                      </div>
                      <div className="pt-1 mb-4">
                        <button onClick={viewEntertains} className="btn btn-success" type="button">View Entertainments</button>
                      </div>
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
export default AdminHome