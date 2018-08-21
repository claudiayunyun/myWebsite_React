import React from 'react';

import {Grid, Row, Col, Button, Glyphicon,Panel } from 'react-bootstrap'

import '../styles/resume.css'

import { Education } from '../Components/About/Resume/Education'
import { TechSkill } from '../Components/About/Resume/TechSkill';
import ProfessionEx from '../Components/About/Resume/ProfessionEx';

export default class Resume extends React.Component {
    

    render() {
        return (
            <Grid container-fluid>
                <Row>
                    <Col md={6}>
                        <h3>Education</h3>
                        <Education />
                        <h3>Technical skills</h3>
                        <TechSkill />
                        <h3>Related Courses</h3>
                        <Panel>
                            <Panel.Body>
                                Test
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <h3>Professional experience</h3>
                        <ProfessionEx />
                    </Col>
                </Row>
                <Button bsSize="large" bsStyle="primary">
                    <Glyphicon glyph="glyphicon glyphicon-download-alt" /> Download PDF Version
                </Button>
            </Grid>
        );
    }
}