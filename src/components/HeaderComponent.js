import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
        Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from "reactstrap";
import { NavLink, withRouter } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import './HeaderComponent.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isDropdownOpen: false

    };
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  toggleNav() {
    this.setState ({
      isNavOpen: !this.state.isNavOpen
    });
  }

  closeNav() {
    this.setState({
      isNavOpen: false 
    });
  }

  toggleDropdown() {
    this.setState(({
      isDropdownOpen: !this.state.isDropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({isDropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({isDropdownOpen: false});
  }

  render() {
    return (
      <div className="header">
        <Jumbotron fluid>
            <div className="container"> 
              
                <div className="row row-header">
                    <div className="col-12 offset-md-1 col-md-4 h2">
                      <p className="styled-text">The</p>
                      <p className="styled-text">Entrepreneurship </p>
                      <p className="styled-text">Network</p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-6">
                      <div className="row justify-content-end py-2">
                        <div className="col-12 offset-md-4 col-md-4">
                       <h3><a href="#" className="badge badge-pill badge-danger w-100 px-5 py-3"><i className="fa fa-shopping-cart"></i></a></h3>
                      </div>
                        <div className="col-12 col-md-4">
                          {this.context.isAuthenticated ? 
                          (<Button outline color="dark" size="lg" className="rounded-0 border-dark" onClick={this.handleLogout}>
                          <span className="fa fa-user-circle"> Logout</span>
                          </Button>)
                          :
                          (
                          <Button outline color="dark" size="lg" className="rounded-0 border-dark w-100" onClick={this.toggleModal}>
                          <span className="fa fa-user-circle"> Login</span>
                          </Button>
                          )}
                        </div>
                      </div>
                      <div className="row py-2">
                      <div className="col-12 offset-md-3 col-md-9">
                        <form class="row">
                          <div class="input-group">
                              <input class="form-control text-white search-bar bg-dark" type="search" placeholder="Search here..."  aria-label="Search" />
                              <span class="input-group-append">
                                <i class="fa fa-search p-3 text-white bg-dark"></i>
                              </span>
                          </div>
                       </form>
                      </div>
                      </div>
                    </div>
                </div>
                <div className="row row-header">
                    <div className="col-12">
                    <Navbar light expand="md">
                      <div className="container">
                        <NavbarBrand className="offset-3 col-6 offset-md-2 col-md-1" href="/">
                          <img src={ baseUrl+"images/logo.png" } height="100%" width="100%" alt="TEN" />
                        </NavbarBrand>  
                        <NavbarToggler onClick={this.toggleNav} className="w-100 m-2" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar className="col-12 h4">
                            <NavItem onClick={this.closeNav}>
                              <NavLink className="nav-link px-3" activeClassName="custom-active" exact={true} to="/">
                                Home
                              </NavLink>
                            </NavItem>
                            <span className="d-none d-md-block border-dark border-right"></span>
                            <NavItem onClick={this.closeNav}>
                              <NavLink className="nav-link px-3" activeClassName="custom-active" exact={true} to="/onlinecourses">
                                Online Courses
                              </NavLink>
                            </NavItem>
                            <span className="d-none d-md-block border-dark border-right"></span>
                            <NavItem onClick={this.closeNav}>
                              <NavLink className="nav-link px-3" activeClassName="custom-active" exact={true} to="/hiring">
                                We're Hiring
                              </NavLink>
                            </NavItem>
                            <span className="d-none d-md-block border-dark border-right"></span>
                            <Dropdown nav inNavbar className="d-inline-block px-3" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown}>
                              <DropdownToggle nav caret>
                                More
                              </DropdownToggle>
                              <DropdownMenu right className="custom-dropdown mr-md-5">
                                <DropdownItem onClick={this.closeNav}>
                                  Blog
                                </DropdownItem>
                                <DropdownItem onClick={this.closeNav}>
                                  Certification
                                </DropdownItem>
                                <DropdownItem onClick={this.closeNav}>
                                  Others...
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Nav>
                        </Collapse>
                      </div>
                    </Navbar>
                    </div>
                </div>
            </div>
        </Jumbotron>
        </div>
    );
  }
}

export default withRouter(Header);