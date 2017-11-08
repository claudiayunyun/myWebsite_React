import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image} from 'react-bootstrap';

class Social extends Component {

  render() {
    return (
      <Grid>
          <Row>
            <Col xs={4} md={2}>
              <Image src='./yunyun_icon.png' responsive />
            </Col>
            <Col xs={8} md={10}>
              <br />
              <h3> Welcome To Yunyun's World </h3>
              
            </Col>
          </Row>
        </Grid>
    );
  }
}

export { Social };