import React, { Component, Children, cloneElement } from 'react';
import { Route, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap/';
import axios from 'axios';
import './App.css';
import { loadReCaptcha } from 'react-recaptcha-google'


  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const leagueUrl = "https://fantasy.premierleague.com/api/leagues-classic/141587/standings/?page_new_entries=1&page_standings=1%20/"
  const playerUrl = "https://fantasy.premierleague.com/api/entry/"
  const playerHistory = "https://fantasy.premierleague.com/api/entry/"

  const loadPlayers = (players, ids) => {
    return players.map((player) =>
      <tr>
        <td><Link to='/' >{player.player_first_name} {player.player_last_name}</Link></td>
        <td>{player.entry_name}</td>
        {ids.map ((id) => {

        })}
      </tr>
    )
  };


  const playerInfo = (players) => {
    return players.map( player =>
      <tr>
        <td>{player.player_first_name} {player.player_last_name}</td>
        <td>{player.entry_name}</td>
      </tr>
    )
  };

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagueUrl: "",
      leagueName: "",
      players: [],
      isLoaded: false,
      playerIds: [],
    }
  };

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }


  componentDidMount() {
    fetch(proxyUrl+leagueUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      const playerId = []
      data.new_entries.results.forEach((player) => {
      fetch(proxyUrl+playerHistory+player.entry+"/history")
      })
      this.setState({
        leagueName: data.league.name,
        players: data.new_entries.results,
        playerIds: playerId,
        isLoaded: true
      })
      })

  //     return fetch(proxyUrl+playerUrl+this.state.players[0].entry)
  //   .then(response => {
  //     console.log(response)
  //     return response.json()
  //   }).then(data => {
  //     this.setState({
  //       isLoaded: true
  //     })
  //   })
  }

  onLoadRecaptcha = () => {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token")
    this.setState({ disabled: false })
  }


  handleRegister = (e) =>  {
    e.preventDefault();
    axios.post('/api/users', {
      user: {
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password_confirmation: this.state.password_confirmation,
      }
    })
    .then(response => {
      this.setState({
        isLoggedIn: true,
        currentUser: response.data.user_id,
        first_name: response.data.first_name,
      })
      localStorage.setItem("isLoggedIn", true)
      localStorage.setItem("currentUser", response.data.user_id)
      localStorage.setItem("first_name", response.data.first_name)
      window.location = "/votes"
    })
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    if (e.target.name === "password" || e.target.name === "password_confirmation") {
      localStorage.setItem("password", "hidden")
    }
    else {localStorage.setItem(e.target.name, e.target.value)}
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios.post('/api/session', {
        email: this.state.email,
        password: this.state.password,
    })
    .then(response => {
      this.setState({
        isLoggedIn: true,
        currentUser: response.data.user_id,
        first_name: response.data.first_name
      })
      localStorage.setItem("isLoggedIn", true)
      localStorage.setItem("currentUser", response.data.user_id)
      localStorage.setItem("first_name", response.data.first_name)
      window.location = "/dashboard"
    })
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear()
    axios.delete('/api/session')
    .then(response => {
    window.location = "/"
    this.setState({
        isLoggedIn: false,
    })
    localStorage.setItem("isLoggedIn", false)
    })
  };


  withRoute = child => {
    return (
      <Route
        exact={child.props.exact || !!child.props.path}
        key={child.name}
        path={child.props.path || '/'}
        render={routeProps => cloneElement(
          child,
          {
            mainState: this.state,
            handleLogin: this.handleLogin,
            handleRegister: this.handleRegister,
            handleInputChange: this.handleInputChange,
            handleLogout: this.handleLogout,
            onLoadRecaptcha: this.onLoadRecaptcha,
            verifyCallback: this.verifyCallback,
            ...routeProps
          }
          )}
        />);
  }

  render() {
    const {
      children
    } = this.props;

    return (
      <div className="App">
        {Children.map(children, this.withRoute)}
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Squad Name</th>
              <th>2018/2019 Total Points</th>
              <th>2018/2019 Rank</th>
            </tr>
          </thead>
          <tbody>
            {this.state.isLoaded ?
            loadPlayers(this.state.players, this.state.playerIds)
            :null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
