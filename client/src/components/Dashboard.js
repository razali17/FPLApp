import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import '../dashboard.css'
import Login from './Login.js';
import NavBar from './NavBar';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Switch } from 'react-router-dom';


const charityList = (charities) => {
  return charities.map(charity =>
    <ul>
      <li>{charity.name}</li>
    </ul>
  )
}


class Dashboard extends Component {
  componentDidMount() {
    this.props.getDashboardInfo()
  }
  render() {
    const {
      user_votes,
      mainState: state,
    } = this.props

    const v1 = state.user_votes[0]
    const v2 = state.user_votes[1]
    const v3 = state.user_votes[2]
    const v4 = state.user_votes[3]
    const v5 = state.user_votes[4]

    const a1 = state.collective_votes[0]
    const a2 = state.collective_votes[1]
    const a3 = state.collective_votes[2]
    const a4 = state.collective_votes[3]
    const a5 = state.collective_votes[4]

    console.log(this.props.mainState.transactions)
    const trans = this.props.mainState.transactions
    return(

      <div>
      {state.isLoggedIn ? (
        <Container>

            <p pull-right> Hello, {state.first_name} </p>

          <Row>
            <Col>
              <p>Your Current Round Ups</p>
              <div className="roundup-bg">
                <p>${state.current_roundup_balance}</p>
                <p>${state.collective_roundup_balance}</p>
              </div>
              <div>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Transactions
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Store Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        {trans.length > 0 ?
                        trans.map ( tran =>
                        <tbody>
                          <tr>
                            <td>{tran.name}</td>
                            <td>{tran.amount}</td>
                            <td>{tran.date}</td>
                          </tr>
                        </tbody>) : null}
                      </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
            <Col>
              <p>Collective Achievements</p>
                {charityList(state.charities)}
            </Col>

          </Row>
          <hr />
          <Row className="mt-5">
            <Col>
              <p>Your Votes</p>
              <ReactMinimalPieChart
                data={[
                  {
                    title: 'Dail Food Bank',
                    value: v1,
                    color: '#3D348B'
                  },
                  {
                    title: 'Habitat for Humanity',
                    value: v2,
                    color: '#F7B801'
                  },
                  {
                    title: 'Parkinson Canada',
                    value: v3,
                    color: '#9895F7'
                  },
                  {
                    title: 'Princess Margaret Foundation',
                    value: v4,
                    color: '#F18701'
                  },
                  {
                    title: 'Sick Kids',
                    value: v5,
                    color: '#F35B04'
                  }
                ]}
                lineWidth={15}
                rounded
                animate
                label
                  labelStyle={{
                    fontSize: '5px',
                  }}
                  labelPosition={60}
              />
            </Col>
            <Col>
              <p>Collective Votes</p>
                <ReactMinimalPieChart
                  data={[
                    {
                      title: 'Dail Food Bank',
                      value: a1,
                      color: '#3D348B'
                    },
                    {
                      title: 'Habitat for Humanity',
                      aalue: a2,
                      color: '#F7B801'
                    },
                    {
                      title: 'Parkinson Canada',
                      value: a3,
                      color: '#9895F7'
                    },
                    {
                      title: 'Princess Margaret Foundation',
                      value: a4,
                      color: '#F18701'
                    },
                    {
                      title: 'Sick Kids',
                      value: a5,
                      color: '#F35B04'
                    }
                  ]}
                  lineWidth={15}
                  rounded
                  animate
                  label
                    labelStyle={{
                      fontSize: '5px',
                    }}
                    labelPosition={60}
                />
            </Col>
          </Row>

        </Container>
        )
      : (
        <Redirect to='/login'/>
      )}
    </div>
    )
  }
}

export default Dashboard;