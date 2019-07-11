import React, { Component } from 'react';
import { Button, ButtonToolbar, Nav, NavDropdown, Navbar}  from 'react-bootstrap';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
import '../nav.css';
import '../App.css';


class NavBar extends Component {
  render() {
    const {
      mainState: state,
      handleLogout,
      handleVoteSelection,
      getTransactions,
    } = this.props;

    return(
      <div>
      { state.isLoaded ?
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand to="/">{state.leagueName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <ButtonToolbar>
          </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      :null}
      </div>
    )
  }
}



export default NavBar;