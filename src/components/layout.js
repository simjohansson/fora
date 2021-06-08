/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Header from "./header";
import theme from '../theme';
import { IntlProvider } from "react-intl";
import sv from '../translations/sv.json';
import en from '../translations/en.json';

const messages = {
  "sv-se": sv,
  "en-gb" : en
}

const Layout = ({ children, location }) => {

  const [language, setLanguage] = React.useState("sv-se");

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={language} messages={messages[language]}>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} location={location} setLanguage={setLanguage} />
        <CssBaseline />
        <main >{children}</main>
      </div>
      </IntlProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
