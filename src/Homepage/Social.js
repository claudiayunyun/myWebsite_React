import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image} from 'react-bootstrap';

class Social extends Component {

  render() {
    return (
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
    );
  }
}

export { Social };