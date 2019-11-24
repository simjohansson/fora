import React from "react";
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography';
import { Container, Paper, Table, TableRow, TableCell, Link, TableBody } from "@material-ui/core";
import {   makeStyles } from "@material-ui/core";
import SEO from "../components/seo"

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
  description: "Stort vandrahem! Här kommer en hel hög av brudenssläkt befinna sig.",
  distanceToParty: "19 km",
  typeOfRooms: "Stuga, hängmatta, två till fyrbäddsrum.",
  priceCategory: "Billigare",
  other: "Här kommer det antagligen arrangeras en grillning på fredagen innan bröllopet. Bastu och utegym finns tillgängligt.",
  website: "https://www.svenskaturistforeningen.se/boende/stf-hagabylantgarden-vandrarhem/",
  booking: "Kontakta brudens mormor",
  breakfast: "Måste köpas till"

},
{
  title: "Äleklintagård",
  description: "Önskas det ett morgondopp? Här bor man i gränslandet mellan alvaret och strandkanten.",
  distanceToParty: "12 km",
  typeOfRooms: "Rum i ett hus, 2 fyrbäddsrum och 1 tvåbäddsrum",
  priceCategory: "-",
  other: "",
  website: "http://aleklintagard.se/",
  booking: "Nämn Simon vid bokning, då han har preliminärt bokat rummen. Hör gärna av dig till brudparet om du har bokat!",
  breakfast: "Tillgång till kök"

},
{
  title: "Wannborga",
  description: "För det vinälskande sällskapet",
  distanceToParty: "15 km",
  typeOfRooms: "Två hus med flera dubbelrum",
  priceCategory: "-",
  other: "Hela huset måste hyras, perfekt för er som vill gå ihop.",
  website: "http://wannborga.se/",
  booking: "Kontakta brudparet",
  breakfast: "Oklart"

},
{
title: "Festlokalen",
description: "Tänker du gå sist från festen? Varför inte bo på plats!",
distanceToParty: "En trappa",
typeOfRooms: "Loft och bibliotek",
priceCategory: "Gratis",
other: "Ta med sovsäck och liggunderlag/madrass. Obs! Dusch saknas.",
website: "",
booking: "Kontakta brudparet",
breakfast: "Saknas, (Kvarglömda chips)"

},
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
      <SEO title="Boende" />
      <Container>
        <Typography variant="h1">Boende</Typography>

        <Typography variant="h2">Här kommer lite tips var man kan vila sig innan och efter festen.</Typography>
        <Typography variant="body1">Detta är bara några av alla möjliga boenden på Öland. Kanske hittar du ett annat ställe som lockar mer? Glöm bara inte av att boka i tid!</Typography>
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