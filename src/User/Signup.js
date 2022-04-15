import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import React from 'react';
import signupImg from "../Customer/Images/wed1.jpg";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  let [data, setData] = useState(undefined);

  const history = useHistory();
  useEffect(() => {
    console.log(Response, "radhe");
    console.log(`first name = ${firstName}`);
    if (data != undefined) {
      axios
        .post(
          "http://localhost:8080/api/user/signup",
          {
            name: firstName,
            email: email,
            phoneNumber: phoneNo,
            password: password,
          },
          { "Content-Type": "application/json" }
        )
        .then((Response) => {
          alert("Registerd Sucessfully")
          history.push("/signin");
        });
    }
  }, [data]);

  const SignupUser = (e) => {
    e.preventDefault();
    console.log(`first name = ${firstName}`);
    console.log(`last name = ${lastName}`);
    console.log(`email = ${email}`);
    console.log(`password = ${password}`);
    console.log(`phoneNo= ${phoneNo}`);

    data = {};
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.password = password;
    data.phoneNo = phoneNo;
    setData(data);

    console.log(data.email);
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src={signupImg}
                    // src="https://royalexaminer.com/wp-content/uploads/2018/03/fooddelivery.jpg" width="200px" height="400px"
                    alt="Sample photo"
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      <b>New User.... SignUp Here !!!</b>
                    </h3>

                    <div class="col-auto">
                      <label for="inputPassword2" class="visually-hidden">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="Enter First Name"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-auto">
                      <label for="inputPassword2" class="visually-hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-auto">
                      <label for="inputPassword2" class="visually-hidden">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-auto">
                      <label for="inputPassword2" class="visually-hidden">
                        Phone No
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="PhoneNo"
                        onChange={(e) => {
                          setPhoneNo(e.target.value);
                        }}
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <Link to="/login">
                        <button
                          type="button"
                          className="btn btn-success btn-lg ms-2"
                          onClick={SignupUser}
                        >
                          Submit
                        </button>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/signin">
                        <button className="btn btn-dark ">Back to login</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
