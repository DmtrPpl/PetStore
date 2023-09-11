import React from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/login.css";

const Signup = ( ) => {
    return (
    <Helmet title="Signup">
        <section>
            <Container>
                <Row>
                    <Col lg='6' className="m-auto text-center">
                        <h3 className="fw-bold mb-4">SignUp</h3>

                        <Form className="auth__form">
                            <FormGroup className="form__group">
                                <input type="Username" placeholder="Username" />
                            </FormGroup>

                            <FormGroup className="form__group">
                                <input type="email" placeholder="Enter your email" />
                            </FormGroup>

                            <FormGroup className="form__group">
                                <input type="password" placeholder="Enter your password" />
                            </FormGroup>

                            <button className="buy__btnBl auth__btn">Create an Account</button>
                            <p> Already have an account?{" "}
                                <Link to="/login"> Login </Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};

export default Signup;