import ListCateringComponents from "../components/ListCateringComponents";
import ListEntertainmentComponents from "../components/ListEntertainmentComponents";
import React from 'react';
import CustomerNavigation from './CustomerNavigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLongArrowAltUp, faSignOutAlt,faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav ,Container} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import SigninImg from '../Customer/Images/wed1.jpg';

const CustomerHome=()=>{
  const history = useHistory();

  const customerSelections = () => {history.push('/venue')};
  const viewCaterings = () => {history.push('/catering')};
  const viewDecors = () => {history.push('/decor')};
  const viewEntertains = () => {history.push('/entertainment')};
  const selectDate = () => {history.push('/date')};
 

    return(
     
      <section className="vh-100" >
      <div className="container py-5 h-100">
      <CustomerNavigation/>
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
                      <h3 className="fw-normal mb-3 pb-3"><b>Welcome...</b> </h3>
                      <div className="pt-1 mb-4">
                        <button onClick={selectDate} className="btn btn-success" type="button">Select Date</button>
                      </div>
    
                      <div className="pt-1 mb-4">
                        <button onClick={customerSelections} className="btn btn-success" type="button">Select Venue</button>
                      </div>
    
                      <div className="pt-1 mb-4">
                        <button onClick={viewCaterings} className="btn btn-success" type="button">Add Caterings</button>
                      </div>
                      <div className="pt-1 mb-4">
                        <button onClick={viewDecors} className="btn btn-success" type="button">Add Decors</button>
                      </div>
                      <div className="pt-1 mb-4">
                        <button onClick={viewEntertains} className="btn btn-success" type="button">Add Entertainments</button>
                      </div>
                      <Nav>
                       <Nav.Link href="/cart">Cart <FontAwesomeIcon icon={faCartArrowDown } /></Nav.Link>
                      </Nav>
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )}
export default CustomerHome;