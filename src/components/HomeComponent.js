import React from "react";
import {
  Card,
  CardGroup,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  UncontrolledCarousel
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import './HomeComponent.css';

const items = [
  {
    src: baseUrl + "/images/homepart8.png" ,
    altText: "Slide 1",
    caption: "-Aakriti Malik, DM Intern",
    header: "Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!",
    key: "1"
  },
  {
    src: baseUrl + "/images/homepart8.png" ,
    altText: "Slide 2",
    caption: "-Harsh Rajput, General Management Intern",
    header: "Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.",
    key: "2"
  },
  {
    src: baseUrl + "/images/homepart8.png",
    altText: "Slide 3",
    caption: "-Anjali Srivastava, Content Intern",
    header: "TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
    key: "3"
  }
];

const Home = (props) => {
  return (
    <div className="home">
      <div className="container">
          <div className="row">
            <div className="col-12">
              <Card inverse>
                <CardImg
                  width="100%"
                  src={baseUrl + "/images/homepart1.png"}
                  alt="homepart1"
                />
                <CardImgOverlay>
                  <p
                    className="font-weight-bold"
                    style={{
                      position: "absolute",
                      bottom: "5%",
                      left: "0%",
                      width: "100%",
                      lineHeight: "1.3em",
                      fontSize: "4vw",
                      textAlign: "center",
                      color: "#FFE68F",
                      fontFamily: "noticia text, serif",
                      textShadow: "1px 1px 1px black",
                      letterSpacing: "0.5rem"
                    }}
                  >
                    A World of Knowledge at Your Fingertips
                  </p>
                </CardImgOverlay>
              </Card>
            </div>
          </div>
          <div className="row row-content">
            <div
              className="col-12 p-4"
              style={{ background: "#FF4040", color: "black" }}
            >
              <p className="text-center font-weight-bold h4">About Us</p>
              <div className="row row-content pb-5">
                <div className="col-12 col-md-6 d-flex align-items-center">
                  <p
                    className="text-center"
                    style={{ fontSize: "2rem" }}
                  >
                    Learning Together From the Comfort of Your Home
                    <br />
                    <a
                      href="#"
                      className="btn btn-lg  btn-outline bg-white text-dark border border-dark rounded-0 mt-4"
                      style={{ boxShadow:"5px 10px 10px black" }}
                    >
                      Learn More
                    </a>
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src={baseUrl + "/images/homepart2.png"}
                    className="m-4"
                    style={{
                      border: "2px solid black",
                      borderRadius: "5px",
                      width: "80%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row row-content my-0 py-0 ">
            <div className="col-12"  
            style={{ 
                backgroundImage: "url('"+ baseUrl + "/images/homepart3.png')" ,
                minHeight: "400px",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <div className="text-center">
                <p style={{         
                  position:"absolute",
                  top:"15%",   
                  left: "0%", 
                  width:"100%",
                  fontWeight: "bold",
                  fontFamily: "cursive, sans-serif",
                  fontSize: "calc(1.75vw + 24px)",
                  textShadow: "1px 2px 1px lightgrey",
                  color: "#ff4721"
                }}>
                  Welcome to
                </p>
                <p style={{
                  position:"absolute",
                  top:"35%",
                  left: "0%",
                  width:"100%",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  fontSize: "calc(5vw + 24px)",
                  textShadow: "1px 2px 1px lightgrey",
                  color: "#ffd440",
                  fontStyle: "italic"
                }}>
                  THE NEXT BIG THING
                </p>
                <p 
                style={{
                  position:"absolute",
                  bottom:"5%",
                  left: "0%",
                  width: "100%",
                }}
                >
                  <hr 
                      style={{ 
                        marginBottom: "10px",
                        borderTop: "4px solid white",
                        width: "calc(5vw + 48px)"
                      }} 
                    />
                  <a
                    href="#"
                    className="badge badge-pill p-4 orange-hover"
                    style= {{
                      color: "white",
                      width: "fit-content",
                      fontWeight: "normal",
                      backgroundColor: "transparent",
                      backgroundImage: "linear-gradient(45deg, blue,purple 40%, red )"
                    }}
                  >
                    Join TEN Virtual Campus
                  </a>
                </p>
              </div>
              </div>
          </div>
          <div className="row row-content mb-0 pb-0">
            <div className="col-12 col-md-8 px-0">
              <Card inverse>
                <CardImg
                  width="100%"
                  src={baseUrl + "/images/homepart4.png"}
                  alt="homepart4"
                />
                <CardImgOverlay>
                  <p
                    style={{
                      position: "relative",
                      top: "20%",
                      fontWeight: "bold",
                      fontSize: "2.4vw",
                      color: "black",
                      textAlign: "start",
                      paddingLeft: "10%",
                      letterSpacing: "0.0625rem",
                    }}
                  >
                    Our Courses
                  </p>
                  <p
                    className="font-weight-bold"
                    style={{
                      position: "relative",
                      top: "25%",
                      width: "100%",
                      lineHeight: "1.5em",
                      fontSize: "4vw",
                      textAlign: "start",
                      color: "#FF5937",
                      textShadow: "1px 1px 1px black",
                      paddingLeft: "8%",
                      letterSpacing: "0.0625rem",
                    }}
                  >
                    Your New <br />
                    Journey Begins Here,
                    <br />
                    Today
                  </p>
                </CardImgOverlay>
              </Card>
            </div>
            <div className="col-12 col-md-4 px-0" style={{ backgroundColor: "#D8053F" }}>
              <p
                style={{
                  position: "relative",
                  top: "10%",
                  fontWeight: "bold",
                  fontSize: "2.5vw",
                  color: "white",
                  textAlign: "center",
                  padding: "10%",
                  letterSpacing: "0.0625rem",
                }}
              >
                Entrepreneurship made fun
                <a
                  href="#"
                  className="badge badge-pill mt-5 w-100 py-3 orange-hover"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "normal",
                  }}
                >
                  Explore Here
                </a>
              </p>
            </div>
          </div>
          <div className="row row-content my-0 py-0">
            <div className="col-12  col-md-6 px-0">
              <img
                width="100%"
                src={baseUrl + "/images/homepart5.png"}
                alt="homepart5"
              />
            </div>
            <div className="col-12 col-md-3" style={{ backgroundColor: "#D8053F" }}>
              <p
                style={{
                  position: "relative",
                  top: "10%",
                  fontWeight: "bold",
                  fontSize: "2.5vw",
                  textAlign: "center",
                  padding: "10%",
                  letterSpacing: "0.0625rem",
                  textDecoration: "underline",
                }}
              >
                <a href="#" style={{ color: "white"}}>Digital Marketing</a>
                <a
                  href="#"
                  className="badge badge-pill mt-5 w-100 py-3 orange-hover"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "normal",
                  }}
                >
                  Explore Here
                </a>
              </p>
            </div>
            <div className="col-12 col-md-3 px-0">
              <img
                width="100%"
                height="100%"
                src={baseUrl + "/images/homepart6.png"}
                alt="homepart6"
              />
            </div>
          </div>
          <div className="row row-content my-0 py-0">
            <div className="col-md-6 px-0" style={{ backgroundColor: "#D8053F" }}>
              <p
                href="#"
                style={{
                  position: "relative",
                  top: "10%",
                  fontWeight: "bold",
                  fontSize: "2.5vw",
                  textAlign: "center",
                  width: "100%",
                  padding: "15%",
                  letterSpacing: "0.0625rem",
                  textDecoration: "underline",
                }}
              >
              <a href="#" style={{ color: "white" }}>Product Management like a pro</a>
                <a
                  href="#"
                  className="badge badge-pill mt-3 w-100 py-3 orange-hover"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "normal",
                  }}
                >
                  Explore Here
                </a>
              </p>
            </div>
            <div className="col-12 col-md-6 px-0">
              <img
                width="100%"
                height="100%"
                src={baseUrl + "/images/homepart7.png"}
                alt="homepart7"
              />
            </div>
          </div>
          <div className="row mt-2 pt-2 mt-md-0 pt-md-0 ">
            <div className="col-12 designer-block d-flex align-items-center justify-content-center">
              <div className="h4 pt-2 text-white">Our Course Benefits</div>
            </div>
          </div>
          <div className="row row-content bg-light mt-3">
            <CardGroup>
              <Card className="text-center border-0 bg-light">
                <CardImg
                  top
                  className="w-50 align-self-center"
                  src={ baseUrl + "/images/svg1.svg" }
                  alt="svg1"
                />
                <CardBody>
                  <CardTitle className="font-weight-bold" tag="h4">
                    Expert Teachers
                    <hr className="special-underline" />
                  </CardTitle>
                  <CardText
                    style={{ lineHeight: "1.5rem", letterSpacing: "0.0625rem" }}
                  >
                    Our instructors are more adept at monitoring student problems
                    and assessing their level of understanding and progress, and
                    they provide much more relevant, useful feedback. We are experts
                    in developing and testing hypotheses about learning difficulties
                    or instructional strategies.
                  </CardText>
                </CardBody>
              </Card>
              <Card className="text-center border-0 bg-light">
                <CardImg
                  top
                  className="w-50 align-self-center"
                  src={ baseUrl + "/images/svg2.svg"  }
                  alt="svg2"
                />
                <CardBody>
                  <CardTitle className="font-weight-bold" tag="h4">
                    Online Community
                    <hr className="special-underline" />
                  </CardTitle>
                  <CardText
                    style={{ lineHeight: "1.5rem", letterSpacing: "0.0625rem" }}
                  >
                    Feel like home, with a <br />
                    "family of invisible friends".
                  </CardText>
                </CardBody>
              </Card>
              <Card className="text-center border-0 bg-light">
                <CardImg
                  top
                  className="w-50 align-self-center"
                  src={ baseUrl + "/images/svg3.svg" }
                  alt="svg3"
                />
                <CardBody>
                  <CardTitle className="font-weight-bold" tag="h4">
                    Flexible Curriculum
                    <hr className="special-underline" />
                  </CardTitle>
                  <CardText
                    style={{ lineHeight: "1.5rem", letterSpacing: "0.0625rem" }}
                  >
                    Our expert teachers design and curate the curriculum using best
                    practices and careful consideration of how people learn and
                    retain information with the ongoing tech trends in the
                    professional domain. We've debated every facet of our
                    methodology, from the order in which to teach concepts, the
                    analogies used to clarify them and how exercises should be
                    structured to deliver the maximum educational punch.
                  </CardText>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
          <div className="row row-content">
            <div className="col-12 d-flex align-items-center justify-content-center" 
              style={{ color: "#E21C21", fontSize: "2.4em", letterSpacing: "0.25rem"}}>
                <p>
                  Testimonials
                  <hr className="special-underline" />
                </p>
            </div>
            <div className="col-12">
            <UncontrolledCarousel items={ items } indicators={false}/>
            </div>
          </div>
          <div className="row row-content pb-0">
            <div className="col-12">
                <div style={{ overflow: "hidden", backgroundColor: "rgba(54, 12, 12, 0.35)"}}>
                  <video autoPlay muted className="w-100"
                    style={{
                    position:"relative", marginTop: "-10%", marginBottom: "-10%",
                    opacity: "1", mixBlendMode: "darken", objectFit: "cover", 
                    objectPosition: "center center" 
                    }} >
                    <source src={ baseUrl + '/videos/homepart9.mp4' } type="video/mp4" />
                  </video>
                  <p style={{  
                      position: "absolute",
                      bottom: "5%",
                      width: "100%",
                      lineHeight: "1.3em",
                      fontSize: "4vw",
                      textAlign: "center",
                      color: "white",
                      letterSpacing: "0.5rem"
                      }} >                
                      <span className="text-3d-white">Power of</span>
                      <span style={{ textShadow: "1px 2px 1px #0f0f0f", fontFamily: "monospace", fontSize: "4.5vw"}}> TEN </span>
                      <span className="text-3d-white">Consulting</span>
                      <br/>
                      <a
                        href="#"
                        className="btn rounded-0 mt-2 mt-md-4 px-4 py-2 white-hover"
                        style={{
                          backgroundColor: "#E21C21",
                          color: "white",
                          fontSize: "1.5vw",
                          fontWeight: "normal",
                          letterSpacing: "0.0625rem",
                        }}
                      >
                        Explore Here
                      </a>
                  </p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
