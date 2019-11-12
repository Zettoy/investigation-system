import React from "react";
import Link from "react-router-dom/Link";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import themeConfig from "../../config/theme";
import services from "../../public/services";

const useStyles = makeStyles(theme => ({
  link: themeConfig.link,
  ourServices: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  cardContent: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  divider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5)
  },
  img: {
    height: '100%',
    width: '100%'
  },
}));

function OurServices() {
  const classes = useStyles();
  const theme = useTheme();

  const servicesToShow = [];
  services.forEach(item => {
    if (item.showHome) servicesToShow.push(item);
  });

  return (
    <Grid container justify="center" className={classes.ourServices}>
      <Grid item xs={themeConfig.xs}>
        <Grid container>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Typography variant="h4" color="primary" style={{fontWeight: 700}}>
              Our Services
            </Typography>
          </Grid>

          <Grid container justify="center" className={classes.divider}>
            <Grid item xs={1}>
              <hr color={theme.palette.primary.main} size={3}/>
            </Grid>
          </Grid>

          <Card>
            <Grid container>
              {servicesToShow.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container alignItems="center"
                        direction={index % 2 === 0 ? "row" : "row-reverse"}>
                    <Grid item sm={12} lg={6} justify="flex-end">
                      <CardMedia
                        component="img"
                        image={item.img}
                        alt="none"
                        title="image"
                        className={classes.img}/>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                      <CardContent>
                        <Grid container className={classes.cardContent}>
                          <Grid item xs={12}>
                            <Typography variant="h5" color="primary" style={{fontWeight: 700}}>
                              {item.label}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} style={{paddingTop: theme.spacing(3)}}>
                            <Typography variant="body1">
                              {item.content}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1"
                                        color="primary"
                                        component={Link}
                                        to={item.pathname}
                                        className={classes.link}
                                        style={{fontWeight: 500}}>
                              Learn More ->
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Card>

          <Grid item xs={12} style={{paddingTop: theme.spacing(2)}}>
            <Button variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/services"
                    style={{textTransform: 'none'}}>
              All Services >
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OurServices;