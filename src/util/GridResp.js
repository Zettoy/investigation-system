import React from "react";
import Grid from "@material-ui/core/Grid";

export default props => (
  <Grid item sm={11} md={9} lg={7}>
    {props.children}
  </Grid>
);