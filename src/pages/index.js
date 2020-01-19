import React from "react"
import { FormattedMessage } from "react-intl";

import {HeadImage} from "../components/headimage";
import SEO from "../components/seo"
import underconstructiongif from '../gifs/underconstruction.gif'
import {   makeStyles } from "@material-ui/core";

const  useStyles = makeStyles(theme => ({

  centerImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '90vw'
  },
  imageContainer: {
    position: 'relative'
  },
  titleTextBlock: {
    position: 'absolute',
    top: '0',
    right: '20%',
   //backgroundColor: 'rgba(0,0,0,.4)',
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
  // backgroundColor: 'rgba(0,0,0,.4)',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontFamily: 'Tangerine',
    fontSize: '4vw',
    maxWidth: '40vw',
    lineHeight: '1em',
    "@media screen and (max-width: 600px)":{
      display: 'none'
    }
  },
  mobileText: {
    display: 'none',
    fontFamily: 'Tangerine',
    fontSize: '2rem',
    "@media screen and (max-width: 600px)":{
      display: 'block'
    }

  },
    title: { fontSize: '3rem', marginTop: '0.5rem', marginBottom: '0.5rem'}
}))

const IndexPage = (props) =>{
  const classes = useStyles();
  const title = 'Hej!';
  const infoText = 'Kul att du har hittat hit! Nu har det kommit upp information angående boende, vigsel och fest!';
  return (
  <>
    <SEO title="Föra bröllop" />
    <div className={classes.imageContainer}>
    <HeadImage/>
    <div className={classes.titleTextBlock}><FormattedMessage id="home.imagehello"/></div>
    <div className={classes.infoTextBlock}><FormattedMessage id="home.imagedescription"/></div></div> 
    <div className={classes.mobileText}><div className={classes.title}><FormattedMessage id="home.imagehello"/></div><div><FormattedMessage id="home.imagedescription"/></div></div>
  </>
);
}
export default IndexPage
