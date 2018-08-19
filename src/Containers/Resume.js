import React from 'react';

import {Button, Glyphicon, PanelGroup, Panel } from 'react-bootstrap'

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
            <div>
                <h3>Professional experience</h3>
                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle className='panel-title'>
                                <h4><b>BlackRock.</b>Full Stack Engineer</h4>
                                <div>BlackRock APG-IS-MAS, San Francisco, CA</div>
                                <div>2018 Summer</div>
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 2</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 3</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 3</Panel.Body>
                    </Panel>
                    <Panel eventKey="4">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 4</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 4</Panel.Body>
                    </Panel>
                </PanelGroup>
                
                <Button bsSize="large" bsStyle="primary">
                    <Glyphicon glyph="glyphicon glyphicon-download-alt" /> Download PDF Version
                </Button>
            </div>
        );
    }
}