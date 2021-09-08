import React from "react";
import { Card, CardText } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import "./HiringComponent.css";

const Hiring = () => {

  function handleSubmit(e) {
    e.preventDefault(); 
    alert("Application Submitted!");
  }

  return (
    <div className="hiring">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 offset-md-1 col-md-10">
          <Card inverse
          style={{
              backgroundImage: "url('"+ baseUrl + "/images/hiringpart1.png')" ,
              height: "fit-content",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover" 
            }}>
            <CardText className="p-3 custom-overlay">
              <p className="text-center font-weight-bold h4">
                We Are Hiring Interns
              </p>
              <p>
                The Student Intern program is a structured and guided work-based
                learning program for students currently enrolled in India.
              </p>
              <p>
                There is a small registration fee, INR 400 /- (RUPEES Four
                HUNDRED ONLY) applicable to all incoming interns as part of this
                One-of-a-Kind Point based Program. This is required not just to
                ensure a seamless on-boarding and exit process but also to
                supply the interns with relevant study material and make them
                aware of how a corporate setup works.
              </p>
              <div className="row">
                <div className="co-12 col-md-6">
                  <p className="font-weight-bold">
                    Scan the QR code to complete your payment and submit the
                    below application form to start with your registration
                    process.
                  </p>
                  <p>
                    Please keep the payment transaction ID handy for submitting
                    the form.
                  </p>
                  <p>
                    Note: This internship does not offer an opportunity to earn
                    money, rather helps an individual grow by working on the job
                    and earn a certificate upon successful completion.
                  </p>
                  <p>
                    Check out few of our open internship positions below Refer
                    the application form for more open positions
                  </p>
                  <p className="font-weight-bold">Digital Marketing Interns</p>
                  <p className="font-weight-bold">General Management Interns</p>
                  <p className="font-weight-bold">Technical/Software Experts</p>
                  <p className="font-weight-bold">Product Management Interns</p>
                  <p className="font-weight-bold">
                    Content Interns and more...
                  </p>
                </div>
                <div className="col-12 offset-md-1 col-md-4">
                  <img src={baseUrl + "/images/payqr.png"} width="100%" alt="payqr" />
                </div>
              </div>
              </CardText>
          </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Card inverse
            style={{
                height: "fit-content",
            }}>
            <div style={{
               backgroundImage: "url('"+ baseUrl + "/images/hiringpart2.png')" ,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                opacity: "0.3"
            }}>

            </div>
            <CardText className="p-3">
            <div className="row row-content">
                <div className="col-12 text-center text-dark pb-4">
                  <p className="h3 font-weight-bold">Application Form</p>
                  <p>Registration Fee Rs.100/-</p>
                </div>
                <div className="col-12 "> 
                  <form className="custom-form" onSubmit={(values) => handleSubmit(values)}>
                    <div className="form-group row">
                        <div className="col-12 offset-md-3 col-md-6"> 
                        <label for="#intership_opening">Choose relevant internship opening *</label>
                        </div>
                        <div className="col-12 offset-md-3 col-md-6">
                        <select
                          className="form-control"
                          id="intership_opening"
                          name="intership_opening"
                          required
                        >
                          <option selected disabled className="d-none"></option>
                          <option>Digital Marketing</option>
                          <option>Market Research</option>
                          <option>Sales</option>
                          <option>Tax Content Prpeparation</option>
                          <option>React Developer</option>
                          <option>Project Management</option>
                          <option>Technical Program Management</option>
                          <option>Product Manager</option>  
                        </select>                
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 offset-md-3 col-md-6"> 
                         <label for="#employment_status">What's your employment status? *</label>
                        </div>
                        <div className="col-12 offset-md-3 col-md-6">
                        <select
                          className="form-control"
                          id="employment_status"
                          name="employment_status"
                          required
                        >
                          <option selected disabled className="d-none"></option>
                          <option>College Student</option>
                          <option>Employed</option>
                          <option>Unemployed</option>
                          <option>Other</option>
                        </select>           
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 offset-md-3 col-md-6"> 
                         <label for="#previous_experience">Do you have previous experience? *</label>
                        </div>
                        <div className="col-12 offset-md-3 col-md-6">
                        <select
                          className="form-control"
                          id="previous_experience"
                          name="previous_experience"
                          required
                        >
                          <option selected disabled className="d-none"></option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>     
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 offset-md-3 col-md-6"> 
                         <label for="#payment_transaction_id">Payment Transaction ID *</label>
                        </div>
                        <div className="col-12 offset-md-3 col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            id="payment_transaction_id"
                            name="payment_transaction_id"
                            required
                        />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 offset-md-8 col-md-2 text-right">
                        <button type="submit" className="btn" >
                            Next
                        </button>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </CardText>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
