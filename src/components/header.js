import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navigation } from "./navigation"
import {   makeStyles } from "@material-ui/core";


const  useStyles = makeStyles(theme => ({

  headerTitle: {
   // fontFamily: 'Tangerine',
    fontSize: '5rem'
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
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h2 className={classes.headerTitle}>
        Bröllop 4 juli 2020 Föra Öland
      </h2>
    </div>
    {/* <Navigation/> */}
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
