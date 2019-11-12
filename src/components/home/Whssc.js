import React from "react";

import {
  Grid,
  Typography
} from "@material-ui/core";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import themeConfig from "../../config/theme";

import security from "../../assets/security.jpg";

const useStyles = makeStyles(theme => ({
  whssc: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
  },
  divider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5)
  },
  img: {
    height: '100%',
    width: '100%'
  },
  missionVisionGoal: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  }
}));

function Whssc() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justify="center" className={classes.whssc}>
      <Grid item xs={themeConfig.xs}>
        <Grid container style={{textAlign: 'center'}}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary" style={{fontWeight: 700}}>
              'Workplace health, safety & security consultancy'
            </Typography>
          </Grid>
          {[
            'Reduce your workplace risks intelligently by engaging Investigation Systems.',
            'At Investigation Systems we have a select band of professional investigators that provide confidential integrated investigative services across industries.',
            'Our philosophy is that there are no problems only people without solutions. Contact Investigation Systems for the solutions to your problems.'
          ].map((item, index) => (
            <Grid item xs={12} key={index} style={{marginTop: theme.spacing(2)}}>
              <Typography variant="body1" color="textPrimary">
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container justify="center" className={classes.divider}>
          <Grid item xs={1}>
            <hr color={theme.palette.primary.main} size={3}/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <img src={security} alt="none" className={classes.img}/>
          </Grid>
          {[
            {
              title: 'Mission',
              content: 'Our mission is to be top service provider in our sector'
            },
            {
              title: 'Vision',
              content: 'Our vision is to provide quality service to all our customers'
            },
            {
              title: 'Goal',
              content: 'Our main goal is to have satisfied customers.'
            }
          ].map((item, index) => (
            <Grid item sm={6} lg={4} key={index}>
              <Grid container>
                <Grid item xs={12} className={classes.missionVisionGoal}>
                  <Typography variant="h6" color="primary">
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" color="textPrimary">
                    {item.content}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Whssc;