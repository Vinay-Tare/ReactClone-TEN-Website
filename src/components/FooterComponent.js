import React from 'react';
import { baseUrl } from "../shared/baseUrl";
import './FooterComponent.css';

function Footer(props) {

    function handleSubmit(e) {
        e.preventDefault(); 
        alert("Thank For Subscribing To Our News Letter!");
    }

    return(
    <div className="footer">
        <div className="container">
            <div className="row">             
                <div className="col-6 offset-md-1 col-md-3 align-self-center">
                    <div className="row">
                    <div className="col-3">
                        <a href="https://www.facebook.com/">
                        <img src={ baseUrl + "/images/facebook-icon.svg"} alt="svg1" />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://twitter.com/">
                        <img src={ baseUrl + "/images/twitter-icon.svg"}  alt="svg2" />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.instagram.com/">
                        <img src={ baseUrl + "/images/instagram-icon.svg"}alt="svg3" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-first order-md-0 justify-content-center px-md-0">
                    <div className="row row-content py-0">
                        <div className="col-12 text-center h5">
                            Subscribe to our newsletter
                        </div>
                            <form className="custom-form"  onSubmit={(values) => handleSubmit(values)} >
                            <div className="row form-group">
                                <div className="col-12 col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    required
                                />                
                                </div>
                                <div className="col-12 col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    required
                                /> 
                                </div>
                                <div className="col-12 col-md-6">
                                <input
                                    type="tel"
                                    pattern="^[0-9]+$"
                                    className="form-control"
                                    id="telnum"
                                    name="telnum"
                                    placeholder="Tel. Number"
                                    required
                                />
                                </div>
                                <div className="col-12 col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                    <label check>
                                    <input 
                                        type="checkbox"
                                        className="form-check-input"
                                        name="agree"
                                    />{" "}
                                    <em>Join TEN's Discord Community</em>
                                    </label>
                                </div>
                                </div>
                                <div className="col-12 text-center pt-2">
                                <button
                                type="submit" color="white"
                                style={{
                                    width: "40%",
                                    border: "2px outset black",
                                    borderRadius: "0px"
                                }}
                                >
                                   Submit
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                </div>
                <div className="col-6 offset-md-1 col-md-3">
                    <div className="row text-center align-items-center h-75 pt-3 pr-4">
                        <a href="#" className="col-12 shadowed-text-black">About Us</a>
                        <a href="#" className="col-12 shadowed-text-black">FAQ's</a>
                        <a href="#" className="col-12 shadowed-text-black">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>  
        <p className="copyright-line my-4 py-1">© 2021 Vinay Tare ( Inspired By - The Entrepreneurship Network )</p>
    </div>
    )
}

export default Footer;