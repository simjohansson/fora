import React from "react"
import Layout from "../components/layout"
import HeadImage from "../components/image";
import SEO from "../components/seo"
import underconstructiongif from '../gifs/underconstruction.gif'
import {   makeStyles } from "@material-ui/core";

const  useStyles = makeStyles(theme => ({

  centerImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const IndexPage = () =>{
  const classes = useStyles();
  
  return (
  <Layout>
    <SEO title="Föra bröllop" />
    <HeadImage/> 
    <img className={classes.centerImage} src={underconstructiongif} />
  </Layout>
);
}
export default IndexPage
