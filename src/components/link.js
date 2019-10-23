import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import {   makeStyles } from "@material-ui/core";

const  useStyles = makeStyles(theme => ({
  link: {
    '&:hover': { textDecoration: 'none' }
  }
 }));

const Link = React.forwardRef(function Link(props, ref) {
  const classes = useStyles();
  return <MuiLink {...props} className={props.className +" " + classes.link} component={GatsbyLink} ref={ref}  />;
});

export default Link;