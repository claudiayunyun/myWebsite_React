import React from 'react';

import {Panel, Media} from 'react-bootstrap'

export const Education = () => {
    return(
        <Panel>
            <Panel.Body>
                <Media>
                    <Media.Left>
                    <img width={64} height={64} src="./images/usc_logo.png" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                    <Media.Heading>University of Southern California</Media.Heading>
                    <p>
                    Los Angeles, CA Master of Science, Computer Science, Dec 2018
                    </p>
                    </Media.Body>
                </Media>
                <hr />
                <Media>
                    <Media.Left>
                    <img width={64} height={64} src="./images/usc_logo.png" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                    <Media.Heading>University of Southern California</Media.Heading>
                    <p>
                    Los Angeles, CA Master of Science, Financial Engineering, Dec 2016
                    </p>
                    </Media.Body>
                </Media>
            </Panel.Body>
        </Panel>
    )
}