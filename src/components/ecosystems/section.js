import React from 'react';

// import styled from 'styled-components';

import Heading from '../organisms/heading';
import Recipe from '../organisms/recipe';

import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';

const RelGrid = styled(Grid)`
    position: relative;
`;

const Section = props => {
    const { name = '', recipe = '', colors = {} } = props

    return (
        <Grid container spacing={0}>
            <Grid item xs={8} sm={6} md={3}>
                <Recipe recipe={recipe} name={name} backgroundColor={colors.recipe} />
            </Grid>
            <RelGrid item xs sm={2} md={1}>
                <Heading name={name} backgroundColor={colors.name} />
            </RelGrid>
        </Grid>
    )
}

export default Section;
