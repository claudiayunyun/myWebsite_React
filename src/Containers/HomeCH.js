import React, { Component } from 'react';
import { Grid, Row, Col, Image, Carousel} from 'react-bootstrap';

import Navigation from '../Components/Home/Navigation.js'
import { Clock } from '../Components/Clock.js'
import { Social } from '../Components/Home/Social.js'
import { Languages } from '../Components/Home/Languages.js';

class HomeCH extends Component {
  render() {
    return ( 
        <Grid>
          <Row>
            <Col xs={4} md={2}>
              <Image src='./images/yunyun_icon.png' responsive />
            </Col>
            <Col xs={8} md={10}>
              <br />
                <h3> 欢迎光临 </h3>                      
              <Navigation />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Clock />
              <Languages />
            </Col>
            <Col md={9}>
            <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="./images/github_page.png" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="./images/github_page.png" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="./images/github_page.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </Col>
          </Row>
          
          <Social />
        </Grid> 
    );
  }
}

export { HomeCH };