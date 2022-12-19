
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { saveData } from './source/Regapi.js';



export function Registration() {


    const [formData, setformData] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [isModalOpened, setIsModalOpened] = useState(false);




    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }

    <Modal show={isModalOpened} onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>User Registration Successful</Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={closeModal}>
                Ok
            </Button>



        </Modal.Footer>
    </Modal>



    const handleValidation = (event) => {
        let formIsValid = true;

        if (!name.match(/[A-Za-z]$/)) {
            formIsValid = false;
            setNameError("Name Cannot Contain Number");
            return false;
        } else {
            setNameError("");
            formIsValid = true;
        }

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }
        if (!phone.match(/^\d{10}$/)) {
            formIsValid = false;
            setPhoneNumberError("Enter Valid Phone Number");
            return false;
        } else {
            setPhoneNumberError("");
            formIsValid = true;
        }


        return formIsValid;
    };

    const loginformData =
    {
        "name": name,
        "email": email,
        "phone": phone,
        "password": password,

    }





    const registrationSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        if (handleValidation()) {
            openModal();
            saveData(loginformData);
            alert("Registration Successful");

        }
        console.log(formData);
    };



    return (
        <>
            <div className="Login">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <form action="/Registration" method="post" id="loginform" onSubmit={registrationSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="NameInput"
                                        name="NameInput"
                                        aria-describedby="nameHelp"
                                        placeholder="Enter Full Name"
                                        onChange={(event) => { setName(event.target.value) }}
                                    />
                                    <small id="nameHelp" className="text-danger form-text">
                                        {nameError}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="EmailInput"
                                        name="EmailInput"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <small id="emailHelp" className="text-danger form-text">
                                        {emailError}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="Number"
                                        className="form-control"
                                        id="NumberInput"
                                        name="NumberInput"
                                        aria-describedby="phoneHelp"
                                        placeholder="Enter Phone Number"
                                        onChange={(event) => setPhone(event.target.value)}
                                    />
                                    <small id="phoneHelp" className="text-danger form-text">
                                        {phoneNumberError}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <small id="passworderror" className="text-danger form-text">
                                        {passwordError}
                                    </small>
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                    />
                                    <label className="form-check-label">I confirm to terms & condition</label>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>









        </>
    );
}








