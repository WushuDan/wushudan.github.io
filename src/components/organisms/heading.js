import React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { white } from '../../constants/colors';

const Vertical = styled(Typography)`
    writing-mode: vertical-rl;
    text-orientation: sideways;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%
    transform: translateX(-50%) translateY(-50%);
`;

const FullPaper = styled(Paper)`
    height: 100%;
    padding-top: 0.75em;
    position: relative;
`;

const Heading = props => {
    const { name = '', backgroundColor = '' } = props;

    return (
        <FullPaper style={{backgroundColor}} square>
            <Vertical component="h2" style={{ color: white, fontSize: `1.25em` }}>{name}</Vertical>
        </FullPaper>
    );
}

export default Heading;
