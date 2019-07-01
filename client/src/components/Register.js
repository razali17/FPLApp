import React, { Component } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap/';
import "../register.css"

class Register extends Component {
  render() {
    const {
      handleInputChange: handleChange,
      handleRegister,
    } = this.props;

    return (

      <div className="background" id="background">
        <Container fluid className="background" id="background">
          <Row className="loginform" id="loginform">
            <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control onChange = {handleChange} name="first_name" type="text" placeholder="First Name" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control onChange = {handleChange} name="last_name" type="text" placeholder="Last Name" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control onChange = {handleChange} name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control onChange = {handleChange} name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control onChange = {handleChange} name="password_confirmation" type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Button className="float-right loginbtn" variant="outline-dark" type="submit" pull-right>
                Register
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;