import PropTypes from "prop-types"
import React from "react"
import { Navigation } from "./navigation"
import Typography from '@material-ui/core/Typography';

import './navigation.css';


const Header = ({ location }) => {
  return (
    <header>
      <div
        style={{
          margin: `0 auto`
        }}
      >
        <Typography variant="h4">
          Caroline & Simon 4 juli 2020 Föra Öland
      </Typography>
      </div>
      <Navigation location={location} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
