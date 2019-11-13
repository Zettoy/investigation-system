import React, {useState} from "react";

import {makeStyles} from "@material-ui/core/styles";

import {
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";

import TypographyNav from "./util/TypographyNav";

const useStyles = makeStyles(theme => ({
  tabItem: {
    marginLeft: theme.spacing(5),
  },
  menu: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.paper
    }
  },

}));

function Tab(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [hover, setHover] = useState(false);

  const item = props.item;

  if (item.menu) {
    return (
      <Grid item key={props.index} className={classes.tabItem}
            onMouseLeave={hover ? undefined : () => setAnchorEl(null)}>
        <TypographyNav aria-controls="menu"
                       aria-haspopup="true"
                       to={item.pathname}
                       onMouseOver={event => {setAnchorEl(event.currentTarget)}}>
          {item.label}
        </TypographyNav>

        <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} role={undefined} transition disablePortal>
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
              <Paper>
                <MenuList id="menu"
                          className={classes.menu}
                          onMouseOver={() => setHover(true)}
                          onMouseLeave={() => {setHover(false); setAnchorEl(null)}}>

                  {item.children.map((item, index) => (
                    <TypographyNav variant="body1"
                                   to={item.pathname}>
                      <MenuItem key={index} className={classes.menuItem}>
                        {item.label}
                      </MenuItem>
                    </TypographyNav>
                  ))}
                </MenuList>

              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    );
  }

  return (
    <Grid item key={props.index} className={classes.tabItem}>
      <TypographyNav to={item.pathname}>
        {item.label}
      </TypographyNav>
    </Grid>
  );
}

export default Tab;