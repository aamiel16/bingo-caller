import React from 'react';
import { Grid } from '@material-ui/core';

export default ({ children }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}


