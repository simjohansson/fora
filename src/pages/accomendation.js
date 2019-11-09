import React from "react";
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography';
import { Container, Paper, Table, TableRow, TableCell, Link, TableBody } from "@material-ui/core";
import {   makeStyles } from "@material-ui/core";

const accomendations = [
{
  title: "ÖlandsRo",
  description: "Boendet närmst lokalen, här kommer det finnas en fin fin frukost!",
  distanceToParty: "1 km",
  priceCategory: "Dyrare",
  typeOfRooms: "Tvåbäddsrum på övervåning, delad toalett och dusch.",
  other: "Ganska litet ställe",
  website: "https://olandsro.se/",
  booking: "Kontakta bröllopsparet",
  breakfast: "Ingår med boendet"
},
{
  title: "Stf Hagaby",
  description: "Stort vandrahem! Här kommer en hel hög av brudenssläkt befinna sig så tänk verkligen efter.",
  distanceToParty: "19 km",
  typeOfRooms: "Stuga, hängmatta, två till fyrbäddsrum.",
  priceCategory: "Billigare",
  other: "Här kommer det antagligen arrangeras en grillning på fredagen innan bröllopet. Bastu och utegym finns tillgängligt.",
  website: "https://www.svenskaturistforeningen.se/boende/stf-hagabylantgarden-vandrarhem/",
  booking: "Kontakta brudens mormor",
  breakfast: "Måste köpas till"

}

]


const  useStyles = makeStyles(theme => ({
  accomendationPaper: {
    marginTop: "3rem",
    padding: "1rem",
  },
  accomendationDescription: {
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  table: {
    maxWidth: '30rem',
  },
  noWrapLabel: {
    whiteSpace: "nowrap"
  }
}))
const AccomendationPage = (props) => {
  const classes = useStyles();
    return (
    <Layout location={props.location}>
      <Container>
        <Typography variant="h1">Boende</Typography>

        <Typography variant="h2">Här kommer lite tips var man kan vila sig innan och efter festen.</Typography>
       
       {accomendations.map((accomendation, index) =>  
       <Paper key={index} className={classes.accomendationPaper}>
        <Typography variant="h3">{accomendation.title}</Typography>
        <Typography className={classes.accomendationDescription} variant="body1">{accomendation.description}</Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
        <TableRow><TableCell><Typography className={classes.noWrapLabel} variant="body1">Avstånd till festlokal: </Typography></TableCell>
       <TableCell><Typography  variant="body1">{accomendation.distanceToParty}</Typography></TableCell></TableRow>    
       <TableRow><TableCell><Typography variant="body1">Typ av rum: </Typography></TableCell>
       <TableCell><Typography  variant="body1">{accomendation.typeOfRooms}</Typography></TableCell></TableRow>
       <TableRow><TableCell><Typography variant="body1">Frukost: </Typography></TableCell>
       <TableCell><Typography  variant="body1">{accomendation.breakfast}</Typography></TableCell></TableRow>
       <TableRow><TableCell><Typography variant="body1">Prisnivå: </Typography></TableCell>
       <TableCell><Typography  variant="body1">{accomendation.priceCategory}</Typography></TableCell></TableRow>
       <TableRow><TableCell><Typography variant="body1">Hemsida: </Typography></TableCell>
       <TableCell><Link variant="body1" href={accomendation.website} target="_blank">Klicka här</Link></TableCell></TableRow>   
       <TableRow><TableCell><Typography variant="body1">Vid bokning: </Typography></TableCell>
       <TableCell><Typography  variant="body1">{accomendation.booking}</Typography></TableCell></TableRow>  
       <TableRow><TableCell><Typography variant="body1">Annat: </Typography></TableCell>
       <TableCell><Typography  variant="body1">{accomendation.other}</Typography></TableCell></TableRow> 
       </TableBody> </Table>
       
       </Paper>)}
      </Container>
    </Layout>
  );
  }
  export default AccomendationPage