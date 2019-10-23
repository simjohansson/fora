import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navigation } from "./navigation"
import {   makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import './navigation.css';

const  useStyles = makeStyles(theme => ({

  headerTitle: {
   // fontFamily: 'Tangerine',
   // fontSize: '3rem'
  }
}));

const Header = ({ siteTitle, location }) => 
{
  const classes = useStyles();
  return (
  <header
  >
    <div
      style={{
        margin: `0 auto`
      }}
    >
      <Typography variant="h4">
        Caroline & Simon 4 juli 2020 Föra Öland
      </Typography>
    </div>
    <Navigation location={location}/>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
