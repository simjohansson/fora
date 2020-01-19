import PropTypes from "prop-types"
import React from "react"
import { Navigation } from "./navigation"
import Typography from '@material-ui/core/Typography';
import ReactFlagsSelect from 'react-flags-select';
import { makeStyles } from "@material-ui/core";

import 'react-flags-select/css/react-flags-select.css';
import './navigation.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Header = ({ location, setLanguage }) => {
  const { container } = useStyles();
  return (
    <header>
      <div
        className={container}
      >
        <Typography variant="h4">
          Caroline & Simon 4 juli 2020 Föra Öland
      </Typography>
        <ReactFlagsSelect
          placeholder="Select Language"
          selectedSize={25}
          alignOptions="left"
          countries={["SE", "GB"]}
          customLabels={{ "SE": "Svenska", "GB": "English" }}
          onSelect={(countryCode) => setLanguage(countryCode === "SE" ? "sv-se" : "en-gb")}
          showSelectedLabel={false}
          showOptionsLabel={false}

          optionsSize={25}
        />

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
