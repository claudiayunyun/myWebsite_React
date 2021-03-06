import React from 'react';
import { Row, Col, Image} from 'react-bootstrap';

export const Social = () => {
    return (
      <div>
      <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
          <h4>Connect With Yunyun</h4>
        </Col>
        <Col xs={12} md={6}></Col>
        <Col xs={2} md={1}>
          <a href='https://github.com/claudiayunyun'><Image src='./images/github.png' responsive /></a>
        </Col>
        <Col xs={2} md={1}>
          <a href = 'https://www.linkedin.com/in/yunyun-huang-53aa9041/'><Image src='./images/linkedin.png' responsive /></a>
        </Col>
        <Col xs={2} md={1}>
          <a href = ''><Image src='./images/facebook.png' responsive /></a>
        </Col> 
        <Col xs={2} md={1}>
          <a href=''><Image src='./images/twitter.png' responsive /></a>
        </Col>
        <Col xs={2} md={1}>
          <a href=''><Image src='./images/weibo.png' responsive /></a>
        </Col>
        <Col xs={2} md={1}>
          <a href = ''><Image src='./images/douban.png' responsive /></a>
        </Col>
      </Row>
      </div>
    );
}
