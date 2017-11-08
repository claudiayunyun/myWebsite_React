import React, { Component } from 'react';
import { Navigation } from './Navigation'
import { Social } from './Social'
import { Nav, NavItem, Grid, Row, Col, Image} from 'react-bootstrap';


class Homepage extends Component {

  render() {
    return (
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
          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <h4>Connect With Yunyun</h4>
            </Col>
            <Col xs={12} md={6}></Col>
            <Col xs={2} md={1}>
              <Image src='./images/github.png' responsive />
            </Col>
            <Col xs={2} md={1}>
              <Image src='./images/weibo.png' responsive />
            </Col>
            <Col xs={2} md={1}>
              <Image src='./images/facebook.png' responsive />
            </Col>
            <Col xs={2} md={1}>
              <Image src='./images/linkedin.png' responsive />
            </Col>
            
            <Col xs={2} md={1}>
              <Image src='./images/twitter.png' responsive />
            </Col>
            <Col xs={2} md={1}>
              <Image src='./images/douban.png' responsive />
            </Col>
          </Row>
        </Grid>
       
    );
  }
}

export { Homepage };