import React from "react";
import Link from "react-router-dom/Link";

import {
  Button,
  Grid,
  Typography, useMediaQuery
} from "@material-ui/core";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import themeConfig from "../../config/theme";

import background from "./assets/background.jpg";

const useStyles = makeStyles(theme => ({
  banner: {
    flexGrow: 1,
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: '-270px',
  },
  bannerContent: {
    paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(15)
  },
}));

function Banner() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justify="center" className={classes.banner}
          style={{backgroundSize: useMediaQuery(theme.breakpoints.down('sm')) ? '' : 'cover'}}>
      <Grid item xs={themeConfig.xs}>
        <Grid container alignItems="center" className={classes.bannerContent}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary" style={{fontWeight: 700, fontSize: 72}}>
              workplace risks??
            </Typography>
          </Grid>
          <Grid item xs={12} style={{marginTop: theme.spacing(6)}}>
            <Typography variant="h4" color="primary">
              Reduce your workplace risks Intelligently!
            </Typography>
          </Grid>
          <Grid item xs={12} style={{marginTop: theme.spacing(7)}}>
            <Button variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/contact"
                    style={{textTransform: 'none'}}>
              Contact Us >
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;