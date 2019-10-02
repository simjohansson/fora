import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navigation } from "./navigation"
import {   makeStyles } from "@material-ui/core";
import './navigation.css';

const  useStyles = makeStyles(theme => ({

  headerTitle: {
   // fontFamily: 'Tangerine',
   // fontSize: '3rem'
  }
}));

const Header = ({ siteTitle }) => 
{
  const classes = useStyles();
  return (
  <header
  style={{fontFamily: "Tangerine"}}
  >
    <div
      style={{
        margin: `0 auto`
      }}
    >
      <h1 className={classes.headerTitle}>
        Caroline & Simon 4 juli 2020 Föra Öland
      </h1>
    </div>
    <Navigation/>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
