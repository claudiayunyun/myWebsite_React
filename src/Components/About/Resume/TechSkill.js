import React from 'react'

import {Panel, Label} from 'react-bootstrap'

export const TechSkill = () => {
    return (
        <Panel>
            <Panel.Body>
                <Label>Java</Label>{' '}
                <Label>Python</Label>{' '}
                <Label>C++</Label>{' '}
                <br />
                <Label bsStyle="primary">Matlab</Label>{' '}
                <Label bsStyle="primary">R</Label>{' '}
                <Label bsStyle="primary">SQL</Label>{' '}
                <br />
                <Label bsStyle="success">HTML</Label>{' '}
                <Label bsStyle="success">CSS</Label>{' '}
                <Label bsStyle="success">JavaScript</Label>{' '}
                <Label bsStyle="success">React</Label>{' '}
                <Label bsStyle="success">Angular</Label>{' '}
                <Label bsStyle="success">PHP</Label>{' '}
                <Label bsStyle="success">Swift</Label>
                <br />
                <Label bsStyle="warning">FRM LevelII</Label>{' '}
                <Label bsStyle="warning">CFA LevelI</Label>{' '}
            </Panel.Body>
        </Panel>
    )
}