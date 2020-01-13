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
import Footer from "./footer";
import theme from '../theme';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: { position: "relative", minHeight: "100%", paddingBottom: "6rem" }
}));

const Layout = ({ children, location }) => {
  const { container } = useStyles();
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
      <div className={container}>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />

        <CssBaseline />
        <main >{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
