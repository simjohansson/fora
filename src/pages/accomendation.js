import React from "react";
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography';
import { Container, Paper } from "@material-ui/core";
import {   makeStyles } from "@material-ui/core";


const  useStyles = makeStyles(theme => ({
  accomendationPaper: {
    marginTop: "3rem",
    padding: "1rem",
  },
  accomendationDescription: {
    fontFamily: "Arial"
  }
}))
const AccomendationPage = (props) => {
  const classes = useStyles();
    return (
    <Layout location={props.location}>
      <Container>
        <Typography variant="h1">Boenden</Typography>

        <Typography variant="h2">Här kommer lite tips var man kan vila sig innan och efter festen.</Typography>
        <Paper className={classes.accomendationPaper}>
        <Typography variant="h3">ÖlandsRo</Typography>
        <Typography className={classes.accomendationDescription} variant="body1">Boendet närmast lokalen, här kommer det finnas en fin fin frukost!</Typography>
        </Paper>

        <Paper className={classes.accomendationPaper}>
        <Typography variant="h3">Stf Hagaby</Typography>
        <Typography className={classes.accomendationDescription} variant="body1">Stort boende! Här kommer en hel hög av brudenssläkt befinna sig så tänk verkligen efter.</Typography>
        </Paper>
      </Container>
    </Layout>
  );
  }
  export default AccomendationPage