import React from "react";
import Link from "react-router-dom/Link"
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.primary
    }
  }
}));

export default props => {
  const classes  = useStyles();

  return (
    <Typography variant={props.variant ? props.variant : "h6"}
                color="primary"
                className={classes.link}
                component={Link}
                to={props.to}
                onMouseOver={props.onMouseOver}>
      {props.children}
    </Typography>
  );
};