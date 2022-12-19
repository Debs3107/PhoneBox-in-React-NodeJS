import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import { Link, NavLink } from "react-router-dom";
// import { Component } from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const NavBar = () => {

    return (
        <>
            <div className="Nav-container" >
                <Navbar sticky="top" bg="dark" variant="dark" >
                    <Container>
                        <h3 className="title-top">Phone<span className="inner-title">Box</span></h3>
                        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                            <LinkContainer to={'/'}>
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <DropdownButton id="dropdown-basic-button" title="Select Mobiles">

                                <NavLink className="dropdown-item" to="/Product3" >Under 10000</NavLink>
                                <NavLink className="dropdown-item" to="/Product2" >Between 10000 to 15000</NavLink>
                                <NavLink className="dropdown-item" to="/Product1" >Between 15000 to 20000</NavLink>

                            </DropdownButton>
                            {/* <LinkContainer to={'/Products'}>


                                <Nav.Link >Products</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to={'/ContactUs'}>
                                <Nav.Link >Contact Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/AboutUs'}>
                                <Nav.Link >About Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/Login'}>
                                <Nav.Link className='login-button'>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/Registration'}>
                                <Nav.Link >Registration</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>

    );


}