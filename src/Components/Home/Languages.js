import React from 'react';
import { Label } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"

export const Languages = () => {
    return(
        <div>
            <h4>Languages</h4>
            <h3>
                <LinkContainer to='/'>
                    <a><Label bsStyle="primary">English</Label></a>
                </LinkContainer>
                {' '}
                <LinkContainer to='/homech'>
                    <a><Label bsStyle="danger">中文</Label></a>
                </LinkContainer>  
            </h3>
            <h3>
                <LinkContainer to='/homefr'>
                    <a href='/'><Label bsStyle="warning">français</Label></a>
                </LinkContainer>
                {' '}
                <LinkContainer to='/homejp'>
                    <a><Label bsStyle="success">日本語</Label></a>
                </LinkContainer>
            </h3>
        </div>
        
    )
}