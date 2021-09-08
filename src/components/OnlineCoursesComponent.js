import React, { useState,useEffect } from 'react';
import { Button, Collapse, Card, CardImg ,CardBody, CardTitle, CardText, CardImgOverlay,
    Modal,  ModalBody } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'; 
import './OnlineCoursesComponent.css';

const RenderCourseCard = ({course}) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);  
    
    return(
        <div className="col-12 col-md-4 my-4">
            <Modal isOpen={modal} toggle={toggleModal} size="lg" centered>
                <ModalBody className="rounded-0">
                <span className="fa fa-close" 
                    style={{ position: "absolute" , top: "6%", right: "3%", cursor: "pointer"}}
                    onClick={toggleModal}
                />
                    <div className="row row-content">
                        <div className="col-12 col-md-6">
                            <img src={ baseUrl + course.image } width="100%"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="h4">{course.description}</p>
                            <button className="btn btn-block btn-danger mt-4">Add To Card</button>
                                <p className="mt-3">
                                <a href="#" style={{ color: "black"}}>
                                    View More Details
                                </a>
                            </p>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <a href="#" className="card-link" onClick={toggleModal}>
            <Card className="p-1 text-dark h-100" key={course.id} >
                <Card className="border-0">
                    <CardImg top width="100%" src={ baseUrl + course.image } alt={course.description}></CardImg>
                    <CardImgOverlay className="px-0">
                        <span className="fa fa-download overlay-download"></span>
                        <div className="overlay-quick-view">Quick View</div>
                    </CardImgOverlay>
                </Card>
                <CardBody>
                    <CardTitle>{course.description}</CardTitle>
                    <CardText style={{ color: "#4BD1A0", fontWeight: "bold" }}>
                    { course.onOffer
                        ? <p>
                            <strike>
                                <span>₹ {course.offerPrice.toFixed(2)}</span>
                            </strike>
                            <span> ₹  {course.price.toFixed(2)}</span> 
                          </p>  
                        : <span>₹  {course.price.toFixed(2)}</span>
                    }
                    </CardText>
                </CardBody>
            </Card>
            </a>
        </div>
    )
}


function OnlineCourses(props) {

    const step = 352.25;

    const [isOpen, setIsOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(199);
    const [maxPrice, setMaxPrice] = useState(7224);
    const [courses, setCourses] = useState([]);
    const [coursesCopy, setCoursesCopy] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState(0);

    useEffect(() => {
        const fetchCourses = () => {
          setLoading(true);
          fetch(baseUrl + "courses.json")
            .then(response => response.json())
            .then(courseData => {
                setCourses(courseData);
                setCoursesCopy(courseData);
                setLoading(false);
            })
        }
        if(courses.length==0){fetchCourses();}
    }, []);

    useEffect(()=>{filterCourseByPrice()},[minPrice, maxPrice]);

    const allCourses = courses.map((course) => {
        return(
                <RenderCourseCard course={course} />
        )
    });

    const filterCourseByPrice = () => {
        let filteredCourses = coursesCopy.filter((course) => {
            return  (course.price >= minPrice && course.price<=maxPrice)
        });
        setCourses( filteredCourses );
        sortData(sortType, filteredCourses);
    }

    const sortData = (selectedOption, coursesAvaialable=courses) => {
        let updatedSortType = parseInt(selectedOption);
        switch(updatedSortType) {
            case 0: {
                setCourses(coursesAvaialable.sort((a,b) => (a.id-b.id)));
                break;
            }
            case 1: {
                setCourses(coursesAvaialable.sort((a,b) => (new Date(b.date) - new Date(a.date))));
                break;
            }
            case 2: {
                setCourses(coursesAvaialable.sort((a,b) => (a.price-b.price)));
                break;
            }
            case 3: {
                setCourses(coursesAvaialable.sort((a,b) => (b.price-a.price)));
                break;
            }
            case 4: {
                setCourses(coursesAvaialable.sort((a,b) => (a.description.localeCompare(b.description))));
                break;
            }
            case 5: {
                setCourses(coursesAvaialable.sort((a,b) => (b.description.localeCompare(a.description))));
                break;
            }
            default: break;
        }
        setSortType(updatedSortType);
    }

    const toggleCollapse = () => setIsOpen(!isOpen);

    const handleMinPriceChange = (currentMinPrice) => {
        if((maxPrice - currentMinPrice)>=step) {
            setMinPrice(currentMinPrice);
        }
    };

    const handleMaxPriceChange = (currentMaxPrice) => {
        if((currentMaxPrice - minPrice)>=step) {
            setMaxPrice(currentMaxPrice);
        }
    };

    return(
        <div className="online-courses">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 bg-dark">
                        <div className="row text-white ">
                            <div className="col-12">
                                <div className="pt-4 pl-2">
                                <span className="h4">Filter by</span>
                                <hr style={{ borderTop: "1px solid grey" }}/>
                            </div>
                            </div>
                            <div className="col-12">
                            <Button onClick={toggleCollapse} className="btn btn-block bg-transparent text-left" 
                            style={{ marginBottom: '1rem', border: "none", boxShadow:"none" }}>
                            <span className="d-flex align-items-center justify-content-between  ">
                                <span>Price</span>
                                { isOpen ? <span className="fa fa-times" /> : <span className="fa fa-plus" /> }
                            </span>
                            </Button>
                            <Collapse isOpen={isOpen}>
                                <div className="range-slider">
                                <input type="range" value="199" min="199" max="7244" step={step}
                                    value={minPrice}  onChange={(e) => handleMinPriceChange(e.target.value) } />
                                <input type="range" value="7224" min="199" max="7244" step={step}
                                    value={maxPrice} onChange={(e) => handleMaxPriceChange(e.target.value) } />
                                </div>
                                <span className="d-flex justify-content-between w-100">
                                    <span className="">₹ {minPrice}</span>
                                    <span className="">₹ {maxPrice}</span>
                                </span>
                                <div>
                                </div>
                            </Collapse>
                            </div>
                            <div className="col-12">
                            <hr style={{ borderTop: "1px solid grey" }}/>
                                {
                                (minPrice!=199 || maxPrice!=7224) 
                                ?  
                                <button 
                                className="btn btn-block bg-transparent text-white" 
                                style={{ marginBottom: '1rem' }} 
                                onClick={ () => {setMinPrice(199); setMaxPrice(7224);}}
                                >
                                Clear Filter  <span className="fa fa-times" />
                                </button>
                                :  <div></div>
                                }
                            </div>
                        </div>
                </div>
                <div className="col-12 col-md-9 justify-content-around">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 offset-md-9 col-md-3">
                                <select 
                                className="form-control rounded-0 bg-dark text-white" 
                                name="sortSelector" 
                                style={{
                                    boxShadow:"none", border: "none"
                                }}
                                onChange={ (e) => sortData(e.target.value) }
                                >
                                        <option value="0" selected>Sort By</option>
                                        <option value="1">Newest</option>
                                        <option value="2">Price (Low To High)</option>
                                        <option value="3">Price(High To Low)</option>
                                        <option value="4">Name A-Z</option>
                                        <option value="5">Name Z-A</option>
                                </select>
                            </div>
                            </div>
                        <div className="row">
                              { loading && <Loading /> }
                            {allCourses}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineCourses;    