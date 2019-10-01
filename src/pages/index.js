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
    marginRight: 'auto',
    maxWidth: '100vw'
  },
  imageContainer: {
    position: 'relative'
  },
  titleTextBlock: {
    position: 'absolute',
    top: '5rem',
    right: '20%',
   // backgroundColor: 'rgba(0,0,0,.7)',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontFamily: 'Tangerine',
    fontSize: '7vw',
    "@media screen and (max-width: 600px)":{
      display: 'none'
    }
  },
  infoTextBlock: {
    position: 'absolute',
    top: '10rem',
    right: '0rem',
   // backgroundColor: 'rgba(0,0,0,.7)',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontFamily: 'Tangerine',
    fontSize: '5vw',
    maxWidth: '40vw',
    lineHeight: '1em',
    "@media screen and (max-width: 600px)":{
      display: 'none'
    }
  },
  mobileText: {
    display: 'none',
    fontFamily: 'Tangerine',
    fontSize: '3rem',
    "@media screen and (max-width: 600px)":{
      display: 'block'
    }

  },
    title: { fontSize: '5rem', marginTop: '2rem', marginBottom: '2rem'}
}))

const IndexPage = () =>{
  const classes = useStyles();
  const title = 'Hej!';
  const infoText = 'Kul att du har hittat hit! Här kommer information finnas om bröllopet så håll utkik!';
  return (
  <Layout>
    <SEO title="Föra bröllop" />
    <div className={classes.imageContainer}>
    <HeadImage/>
    <div className={classes.titleTextBlock}>{title}</div>
    <div className={classes.infoTextBlock}>{infoText}</div> </div>
    <div className={classes.mobileText}><div className={classes.title}>{title}</div><p>{infoText}</p></div>
    <img className={classes.centerImage} src={underconstructiongif} />
  </Layout>
);
}
export default IndexPage
