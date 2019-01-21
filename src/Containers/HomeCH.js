import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';

import Navigation from '../Components/Home/Navigation.js'
import { Clock } from '../Components/Clock.js'
import { Social } from '../Components/Home/Social.js'
import { Languages } from '../Components/Home/Languages.js';
import { HomeCarousel } from '../Components/Home/HomeCarousel.js';

export default class HomeCH extends Component {
  render() {
    return ( 
        <Grid>
          <Row>
            <Col xs={4} md={2}>
              <Image src='./images/yunyun_icon.png' responsive />
            </Col>
            <Col xs={8} md={10}>
              <br />
                <h3> 欢迎光临芸芸的世界 </h3>                      
              <Navigation />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Clock />
              <Languages />
            </Col>
            <Col md={9}>
                <HomeCarousel />
            </Col>
          </Row>
          
          <Social />
        </Grid> 
    );
  }
}
