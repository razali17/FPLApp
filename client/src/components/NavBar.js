import React, { Component } from 'react';
import { Button, ButtonToolbar, Nav, NavDropdown, Navbar}  from 'react-bootstrap';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';


class NavBar extends Component {
  render() {
    const {
      mainState: user,
      handleLogout,
      handleVoteSelection
    } = this.props;

    return(
      <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">The Change Collective</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Links to="/#home-why">Why</Links></Nav.Link>
            <Nav.Link><Links to="/#home-collective">The Collective</Links></Nav.Link>
            <Nav.Link><Links to="/#home-charities">Charities</Links></Nav.Link>
            <form onSubmit={this.props.getTransactions} >
              <Button className='mr-1' variant="outline-dark">Transactions</Button>
            </form>
            <form onSubmit={handleLogout} >
              <Button type="submit" className='mr-1' variant="outline-dark">Logout</Button>
            </form>
            <form onSubmit={handleVoteSelection} >
              <Button type="submit" className='mr-1' variant="outline-dark">Votes</Button>
            </form>
            <Button className='mr-1' variant="outline-dark">Settings</Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/charities">Charities</Link></Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/dashboard">Dashboard</Link></Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/login">Login</Link></Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/register">Register</Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/*<Nav className="justify-content-end m-3" activeKey="/home">
        <Nav.Item>

        </Nav.Item>
        <Nav.Item>

        </Nav.Item>
        <Nav.Item>

        </Nav.Item>
        <Nav.Item>

        </Nav.Item>
        <Nav.Item>
          <ButtonToolbar>




          </ButtonToolbar>
          <ButtonToolbar>

          </ButtonToolbar>
        </Nav.Item>
      </Nav>*/}
      </div>
    )
  }
}



export default NavBar;