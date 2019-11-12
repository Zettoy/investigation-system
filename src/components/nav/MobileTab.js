import React, {useState} from "react";
import Link from "react-router-dom/Link";

import {
  Button,
  Grid,
  Typography
} from "@material-ui/core";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import navItems from "../../public/navItems";
import themeConfig from "../../config/theme";

const useStyles = makeStyles(theme => ({
  link: themeConfig.link,
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

      {open && (
        <Grid item xs={12}>
          <Grid container style={{paddingTop: theme.spacing(1), paddingBottom: theme.spacing(3)}}>
            {navItems.map((item, index) => (
              <Grid item xs={12} key={index} style={{marginTop: theme.spacing(1)}}>
                <Typography variant="h6" color="primary" className={classes.link}
                            component={Link} to={item.pathname}>
                  {item.label}
                </Typography>
              </Grid>
            ))}

            <Grid item xs={12} style={{marginTop: theme.spacing(3)}}>
              <Button variant="contained" color="primary" className={classes.button}>
                Learning Portal
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default MobileTab;