import React, { Component } from 'react';
import { Nav, NavItem, Grid, Row, Col, Image} from 'react-bootstrap';

import { Navigation } from './Navigation'
import { Social } from './Social'
import { Clock } from './Clock'


class Homepage extends Component {
  // const divStyle = {
  //   textAlign: 'center',
  //   padding:'1em'
  // }

  render() {
    return (
        <Grid>
          <Row>
            <Col xs={4} md={2}>
              
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
       
    );
  }
}

export { Homepage };