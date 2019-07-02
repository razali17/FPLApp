import React from 'react';
import '../HeroSection.css';
import { Container, Row, Col, Image, Card, CardDeck, Button } from 'react-bootstrap/';
import {Link} from 'react-router-dom';


const HeroSection = props => (
  <div className='App'>
    <Container fluid className="hero-section">
      <Row className="hero-background-color" id="home">
        <Col>
          <img src={'https://i.imgur.com/PQK9FOC.png'} className="hero-shape" alt="" />
        </Col>
        <Col className="hero-text">
          <div >
            <h1>Make a change, collectively</h1>
            <p> The bottom-up solution to making a meaningful impact in your community. </p>
          </div>
        </Col>
        <Col>
          <img src={'https://i.imgur.com/kwB8nDe.png'} alt="" />
        </Col>
      </Row>
      <Row className="blurb-text">
        <Col>
          <p>"We can all do small things, with great love, and together we can do something wonderful." – Mother Teresa</p>
        </Col>
        <Col>
          <p>"Alone we can do so little; together we can do so much." – Helen Keller </p>
        </Col>
      </Row>
      <Row className="home-why " id="home-why">
        <Col sm={10}>
          <h2>Why?</h2>
          <p>Monthly giving from people like you is the most sustainable source of nonprofit funding in the world. It allows organizations to spend less time fundraising, think longer-term, and make a bigger impact.</p>
          <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/FVIulN9.png" />
              <Card.Body>
                <Card.Title>Automated Giving</Card.Title>
                <Card.Text>
                  Make donations simple and secure. Reduce the hassle of worrying about spare change.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/LYKDlKA.jpg" />
              <Card.Body>
                <Card.Title>Meaningful Change</Card.Title>
                <Card.Text>
                  Help Canadian charities close to your heart accomplish real goals through a collective effort.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/K3IVbW7.jpg" />
              <Card.Body>
                <Card.Title>Lower Tax</Card.Title>
                <Card.Text>
                  Report your charitable donations and claim your tax credits when you file your income tax return.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className="home-collective" id="home-collective">
        <Col>
          <div>
            <img src={'https://i.imgur.com/lQozyZl.png'} alt="Donate" className="collective-img"/>
          </div>
        </Col>
        <Col>
          <div>
            <h2>How Does It Work?</h2>
            <p>Allocate 5 votes to the nonprofits of your choice.</p>
            <p>Based on your votes and the collective votes, our optimized algorithm creates a collective agenda, giving even minority populations a voice.</p>
            <p>At the end of the month, your the collective change will combine to actualize real goals.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="home-charities" id="home-charities">

        <Col>
          <Image src={'https://i.imgur.com/PdnVWGx.png'} alt="Habitat for Humanity. Habitat pour l'humanité. Canada"  />
        </Col>
        <Col>
          <Image src={'https://i.imgur.com/7BkiXTN.png'}  alt="Habitat for Humanity. Habitat pour l'humanité. Canada" />
        </Col>
        <Col>
          <Image src={'https://i.imgur.com/HGj2mrR.png'}  alt="Habitat for Humanity. Habitat pour l'humanité. Canada" />
        </Col>
        <Col>
          <Image src={'https://i.imgur.com/8mO4p7w.png'}  alt="Habitat for Humanity. Habitat pour l'humanité. Canada" />
        </Col>
        <Col>
          <Image src={'https://i.imgur.com/KI4Xl6q.png'} alt="Habitat for Humanity. Habitat pour l'humanité. Canada"  />
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeroSection;