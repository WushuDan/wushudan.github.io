import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { white } from '../../constants/colors';

const FullPaper = styled(Paper)`
    height: 100%;
    padding-top: 0.75em;
    padding-left: 1.0em;
    padding-right: 1.0em;
`;

const Br = styled.br`
    padding-left: 0.5em;
    padding-right: 0.5em;
`;

const regexp = /^[\w]*$/;

const Recipe = props => {
    const { recipe = '', name ='', backgroundColor = '' } = props

    const sentences = recipe.split(/\r?\n/)
        .filter(sentence => sentence !== name)
        .filter(sentence => !regexp.test(sentence))
        .filter(sentence => !sentence.includes("="));

    return (
        <FullPaper style={{backgroundColor}} square>
            {
                sentences.map((sentence, index) => {
                    switch (sentence[0]) {
                    case "#":
                        return <Br key={index} />
                    
                    default:
                     return <Typography key={index} variant="body2" align="left" style={{ color: white }}>{sentence.replace("*", "")}</Typography>
                    }
                })
            }
        </FullPaper>
    )
}

export default Recipe;
