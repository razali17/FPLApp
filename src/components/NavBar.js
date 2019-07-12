import React, { Component } from 'react';
import { Button, ButtonToolbar, Nav, NavDropdown, Navbar}  from 'react-bootstrap';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
import '../nav.css';
import '../App.css';

  const playerList = (players) => {
    return players.map(player =>
        <Button className='mr-1' variant="outline-dark"><Link to="/">{player.player_first_name +" "+ player.player_last_name}</Link></Button>
    )
  };


class NavBar extends Component {
  render() {
    const {
      mainState: state,
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
            <ButtonToolbar>
            {state.isLoaded ?
            playerList(state.players.results)
            :null}
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