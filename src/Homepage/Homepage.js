import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';

import Navigation from './Navigation'
import { Social } from './Social'
import { Clock } from './Clock'


class Homepage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={4} md={2}>
              <Image src='./images/yunyun_icon.png' responsive />
            </Col>
            <Col xs={8} md={10}>
              <br />
              <h3> Welcome To Yunyun's World </h3>
              <Navigation />
            </Col>
          </Row>
          <Social />
          <Clock />
        </Grid>
      </div>
       
    );
  }
}

export { Homepage };