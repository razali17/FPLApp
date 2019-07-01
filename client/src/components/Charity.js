import React, { Component } from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';

const style =  {
  color: 'black'
}

const printChars = (charities) => {
  return charities.map( charity =>
    <Carousel.Item>
    {console.log("charity", charity)}
    {console.log("charity.objectives", charity.objectives)}
      <img className="d-block w-100" src={ charity.image } alt={charity.name} />
      <Carousel.Caption>
        <p style={style}>{charity.desc}</p>
        <ul>
          <li style={style}>{charity.objectives[0].objective}</li>
          { charity.objectives[1] ? (
          <li style={style}>{charity.objectives[1].objective}</li>
          ):(null)}
        </ul>
      </Carousel.Caption>
    </Carousel.Item>
  )
}

class Charity extends Component {
  render(){
    const {
      mainState: state,

    } = this.props

    return (
      <Container>
        <Row>
          <Col sm={6}>
            <Carousel>
              {printChars(state.charities)}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Charity;