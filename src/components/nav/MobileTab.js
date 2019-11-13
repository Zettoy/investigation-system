import React, {useState} from "react";

import {
  Button,
  Collapse,
  Grid
} from "@material-ui/core";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import TypographyNav from "./util/TypographyNav";

import navItems from "../../public/navItems";

const useStyles = makeStyles(theme => ({
  menu: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3)
  },
  button: {
    borderRadius: '20px',
    textTransform: 'none'
  }
}));

function MobileTab() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          Menu
        </Button>
      </Grid>
        <Grid item xs={12}>
          <Collapse in={open}>
            <Grid container className={classes.menu}>
              {navItems.map((item, index) => (
                <Grid item xs={12} key={index}
                      style={{marginTop: theme.spacing(1)}}>
                  <TypographyNav to={item.pathname}>
                    {item.label}
                  </TypographyNav>
                </Grid>
              ))}
              <Grid item xs={12}
                    style={{marginTop: theme.spacing(3)}}>
                <Button variant="contained" color="primary" className={classes.button}>
                  Learning Portal
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
    </React.Fragment>
  );
}

export default MobileTab;