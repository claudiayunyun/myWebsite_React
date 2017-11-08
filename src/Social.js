import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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
              <Navigation />
            </Col>
          </Row>
        </Grid>
    );
  }
}

export { Social };