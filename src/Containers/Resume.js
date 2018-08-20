import React from 'react';

import {Grid, Row, Col, Button, Glyphicon, PanelGroup, Panel, Media } from 'react-bootstrap'

import '../styles/resume.css'

export default class Resume extends React.Component {
    constructor(){
        super();
        this.state = {
            activeKey: '1'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect(activeKey) {
        this.setState({ 
            activeKey : activeKey
        });
    }

    render() {
        return (
            <Grid container-fluid>
                <Row>
                    <Col md={6}>
                        <h3>Education</h3>
                        <div style={{backgroundColor:'white',color:'black'}}>
                        <Media>
                            <Media.Left>
                            <img width={64} height={64} src="./images/usc_logo.png" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                            <Media.Heading>University of Southern California</Media.Heading>
                            <p>
                            </p>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Media.Left>
                            <img width={64} height={64} src="./images/usc_logo.png" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                            <Media.Heading>University of Southern California</Media.Heading>
                            <p>
                            </p>
                            </Media.Body>
                        </Media>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h3>Professional experience</h3>   
                        <PanelGroup activeKey={this.state.activeKey}
                                    onSelect={this.handleSelect} 
                                    accordion>
                            <Panel eventKey="1">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        <h4><b>BlackRock.</b>Full Stack Engineer</h4>
                                        <div>BlackRock APG-IS-MAS, San Francisco, CA</div>
                                        <div>2018 Summer</div>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <ul>
                                        <li>
                                        Implemented AG Insights web application for multi assets strategies team, 
                                        used Django/Python as backend and React as frontend. 
                                        Configured the project from scratch, 
                                        implemented Client Side Cache folder structure page and integrated the page into existed project.
                                        </li>
                                        <li>
                                        Visualized large folder structure as tree structure, 
                                        implemented customize functions to dynamically render the tree, 
                                        use search bar and breadcrumb to navigate the tree. 
                                        Use Python Pandas to parse csv and parquet files, 
                                        visualize the data with tree map and line chart.
                                        </li>
                                        <li>
                                        Separated constant variables for styles into one file, 
                                        created util functions file and separated stateless components for future code reuse. 
                                        Use Bitbucket as version control server, 
                                        cut new branches when implementing new features and create pull requests for peer coding reviews.
                                        </li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="2">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        <h4><b>The Veloz Group.</b>Web Engineer</h4>
                                        <div>The Veloz Group, Los Angeles, CA</div>
                                        <div>2017 Summer</div>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <ul>
                                        <li>
                                        Implemented E-commerce web application 
                                        (customize tobacco) based on Opencart MVC-L framework responsively, 
                                        including homepage and design tool page
                                        </li>
                                        <li>
                                        Used React to rewrite homepage and design tool page, 
                                        got all website design data from JSON files, 
                                        implemented mobile applications with React Native parallel
                                        </li>
                                        <li>
                                        Used SQL to design databases and used PHP to connect to MySql to retrieve and modify data
                                        </li>
                                        <li>
                                        Tested the web application with different web browsers and different operating systems and fixed the bugs
                                        </li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        <h4><b>Holly Future Co. Ltd.</b>Quantitative Analyst</h4>
                                        <div>Department of Quantitative Technology, Holly Futures Co. Ltd., Nanjing China</div>
                                        <div>2016 Summer</div>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <ul>
                                        <li>
                                        Participated in the design of database for storing stocks trading data retrieved from Bloomberg platform every 30 seconds, 
                                        implemented the part of data cleaning, 
                                        modified missing and mistaken data automatically
                                        </li>
                                        <li>
                                        Used Matlab and R built-in models to analyze high frequency future trading data, 
                                        visualized the data by generating charts and tables automatically every 30 minutes
                                        </li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="4">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        <h4><b>Huatai Securities Co. Ltd.</b>Financial Service Assistant</h4>
                                        <div>Hubu Street Securities Sales Department, Nanjing, China</div>
                                        <div>2013-2015 Summer</div>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <ul>
                                        <li>
                                        Maintained the client information database with spreadsheets and participated in the design of CRM platform, 
                                        recommended proper financial products by analyzing client data  
                                        </li>
                                        <li>
                                        Daily investment advisory services for young people, promoted mobile finance applications, 
                                        educated the fun and profit of finance and investment even with small amount of money
                                        </li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                    </Col>
                </Row>
                
                <Button bsSize="large" bsStyle="primary">
                    <Glyphicon glyph="glyphicon glyphicon-download-alt" /> Download PDF Version
                </Button>
            </Grid>
        );
    }
}