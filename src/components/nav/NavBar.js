import React from "react";
import Link from "react-router-dom/Link";

import {
  AppBar,
  Button,
  Grid,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

import navItems from "../../public/navItems";

import Tab from "./Tab";
import MobileTab from "./MobileTab";
import GridResp from "../../util/GridResp";

import logo from "../../assets/logo.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  tabs: {
    flexGrow: 1,
    paddingLeft: theme.spacing(5),
  },
  button: {
    borderRadius: '20px',
    textTransform: 'none'
  }
}));

function NavBar() {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" className={classes.appBar} elevation={0}>
      <Grid container justify="center" className={classes.root}>
        <GridResp>
          <Grid container alignItems="center">

            <Grid item style={{flexGrow: matches ? 1 : 0}}>
              <Link to="/">
                <img src={logo} alt="none" height="60px"/>
              </Link>
            </Grid>

            {matches && (
              <MobileTab/>
            )}

            <Hidden smDown>
              <Grid item className={classes.tabs}>
                <Grid container>
                  {navItems.map((item, index) => (
                    <Tab item={item} index={index}/>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Learning Portal
                </Button>
              </Grid>
            </Hidden>
          </Grid>
        </GridResp>
      </Grid>
    </AppBar>
  );
}

export default NavBar;