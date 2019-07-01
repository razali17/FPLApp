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
                <Form.Control type="text" placeholder="First Name" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Button className="float-right" variant="outline-dark" type="submit" pull-right>
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