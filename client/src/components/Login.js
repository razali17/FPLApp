import React, { Component } from 'react';
import '../login.css'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap/';


class Login extends Component {
  render() {
    const {
      handleInputChange: handleChange,
      handleLogin,
      mainState: state,
    } = this.props;

    return (
      <div className="background" id="background">
        <Container fluid className="background" id="background">
          <Row className="loginform" id="loginform">
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control onChange = {handleChange} name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control onChange = {handleChange} name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Button className="float-right loginbtn" variant="outline-dark" type="submit" pull-right>
                Login
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;