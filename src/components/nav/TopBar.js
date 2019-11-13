import React from "react";

import {
  Grid,
  Link,
  Typography
} from "@material-ui/core";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import GridResp from "../../util/GridResp";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main
  },
  tabs: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  text: {
    color: 'white'
  },
}));

function TopBar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justify="center" className={classes.root}>
      <GridResp>
        <Grid container alignItems="center" className={classes.tabs}>
          <Grid item>
            <Typography variant="body2" className={classes.text} color="inherit">
              PO Box 8457, Blacktown NSW 2148
            </Typography>
          </Grid>
          <Grid item style={{flexGrow: 1, marginLeft: theme.spacing(2)}}>
            <Typography variant="body2" className={classes.text} component={Link}
                        href="tel:2+61 414 994 110">
              +61 414 994 110
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.text} component={Link}
                        href="mailto:terryflanders@investigationsystems.com">
              terryflanders@investigationsystems.com
            </Typography>
          </Grid>
        </Grid>
      </GridResp>
    </Grid>
  );
}

export default TopBar;