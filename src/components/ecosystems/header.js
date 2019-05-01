import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { white, tomato } from '../../constants/colors';

import logoImage from '../../assets/tacoLogo.PNG';

const PaddedGrid = styled(Grid)`
    padding-left: 1.0em;
    padding-bottom: 1.0em;
    background-color: ${white};
    height: 100%;
`;

const Img = styled.img`
  max-height: 15em;
  min-height: 15em;
`;

const Header = props => {
    const { onClick = () => {} } = props;

    return (
        <Grid container>
            <PaddedGrid item xs={12} sm={8} md={4}>
                <Grid item container direction="row" justify="space-between" alignItems="flex-start">
                    <Grid item style={{ paddingTop: '1em' }}>
                        <Button onClick={onClick} style={{ color: white, backgroundColor: tomato, paddingLeft: '2.0em', paddingRight: '2.0em', borderRadius: '8px' }}>New Taco</Button>
                    </Grid>
                    <Grid item>
                        <Img src={logoImage} />
                    </Grid>
                </Grid>
                <Grid item container direction="row" style={{ marginTop: '-4em' }}>
                    <Grid item>
                        <Typography variant="title" align="left" style={{ fontWeight: 700 , fontSize: '2.5em' }}>Today's Taco</Typography>
                    </Grid>
                </Grid>
            </PaddedGrid>
        </Grid>
    )
}

export default Header;
