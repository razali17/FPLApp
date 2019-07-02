import React, { Component } from 'react';
import { Container, Row, Col, Accordion, Table, Card, Badge } from 'react-bootstrap';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import '../dashboard.css'


// const charityList = (charities) => {
//   return charities.map(charity =>
//     <ul>
//       <li>{charity.name}</li>
//     </ul>
//   )
// }

const goalCompleted = (goals) => {
  return goals.map( goal =>
    <tr>
      <td>{goal.objective}</td>

      <td>{ goal.completed === true ?<Badge variant="success">Success</Badge> :
      null }</td>
    </tr>
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

    const i1 = state.user_votes[0]
    const i2 = state.user_votes[1]
    const i3 = state.user_votes[2]
    const i4 = state.user_votes[3]
    const i5 = state.user_votes[4]

    const b1 = state.collective_votes[0]
    const b2 = state.collective_votes[1]
    const b3 = state.collective_votes[2]
    const b4 = state.collective_votes[3]
    const b5 = state.collective_votes[4]

    const total = b1+b2+b3+b4+b5

    const a1 = (b1/total) * 100
    const a2 = (b2/total) * 100
    const a3 = (b3/total) * 100
    const a4 = (b4/total) * 100
    const a5 = (b5/total) * 100

    const itotal = i1+i2+i3+i4+i5

    const v1 = (i1/itotal) * 100
    const v2 = (i2/itotal) * 100
    const v3 = (i3/itotal) * 100
    const v4 = (i4/itotal) * 100
    const v5 = (i5/itotal) * 100

    console.log(this.props.mainState.transactions)
    const trans = this.props.mainState.transactions
    return(

      <div>
        <Container>

            <p pull-right> Hello, {state.first_name} </p>

          <Row>
            <Col>
              <p>Your Current Round Ups</p>
              <div className="roundup-bg">
                <p>${state.current_roundup_balance}</p>
                <p>${state.total_balance}</p>
              </div>

            </Col>
            <Col>
              <p>Collective Achievements</p>
               {/* {charityList(state.charities)}*/}
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Goal Objective</th>
                      <th>Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goalCompleted(state.goals)}
                  </tbody>
                </Table>
            </Col>

          </Row>
          <Row>
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
                            <th>Amount Rounded</th>
                          </tr>
                        </thead>
                        {trans.length > 0 ?
                        trans.map ( tran =>
                        <tbody>
                          <tr>
                            <td>{tran.name}</td>
                            <td>{tran.amount}</td>
                            <td>{tran.date}</td>
                            <td>{tran.roundup}</td>
                          </tr>
                        </tbody>) : null}
                      </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
          </Row>
          <hr />
          <Row className="mt-5">
            <Col>
              <p>Your Votes</p>
              <h3 id="your_votes"></h3>
              <ReactMinimalPieChart className="your_votes"
                data={[
                  {
                    title: 'Daily Food Bank',
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
                onMouseOver={(event, data, dataIndex) => {
                  var node = document.getElementById('your_votes');
                  node.innerHTML = "<p>"+data[dataIndex].title+": "+Math.round(data[dataIndex].value).toFixed(2)+"%</p>";
                }}
                label={({data, dataIndex}) => (data[dataIndex].value ? (data[dataIndex].title):(null))}
                  labelStyle={{
                    fontSize: '3px',
                  }}
                  labelPosition={60}
              />
            </Col>
            <Col>
              <p>Collective Votes</p>
              <h3 id="collective_votes"></h3>
                <ReactMinimalPieChart
                  data={[
                    {
                      title: 'Daily Food Bank',
                      value: a1,
                      color: '#3D348B'
                    },
                    {
                      title: 'Habitat for Humanity',
                      value: a2,
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
                      color: '#9895F7'
                    },
                    {
                      title: 'Sick Kids',
                      value: a5,
                      color: '#F0ECFC'
                    }
                  ]}
                  lineWidth={15}
                  rounded
                  animate
                  onMouseOver={(event, data, dataIndex) => {
                  var node = document.getElementById('collective_votes');
                    node.innerHTML = "<p>"+data[dataIndex].title+": "+Math.round(data[dataIndex].value).toFixed(2)+"%</p>";
                  }}
                  label={({data, dataIndex}) => (data[dataIndex].value ? (data[dataIndex].title):(null))}
                    labelStyle={{
                      fontSize: '2px',
                    }}
                    labelPosition={60}
                />
            </Col>
          </Row>

        </Container>

    </div>
    )
  }
}

export default Dashboard;