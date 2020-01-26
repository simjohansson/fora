import React, { useContext } from "react"
import Layout, { LanguageContext } from "../components/layout"
import Typography from '@material-ui/core/Typography';
import { Container, Paper, Table, TableRow, TableCell, Link, TableBody } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SEO from "../components/seo"
import { useIntl, FormattedMessage } from "react-intl";

const accommodations = [
  {"sv-se": {
    title: "ÖlandsRo",
    description: "Boendet närmst lokalen, här kommer det finnas en fin fin frukost!",
    distanceToParty: "1 km",
    priceCategory: "Dyrare",
    typeOfRooms: "Tvåbäddsrum på övervåning, delad toalett och dusch.",
    other: "Ganska litet ställe",
    website: "https://olandsro.se/",
    booking: "Kontakta bröllopsparet",
    breakfast: "Ingår"
  },
"en-gb": {
  title: "ÖlandsRo",
  description: "The accommodation closest to the party, here there will be a nice breakfast!",
  distanceToParty: "1 km",
  priceCategory: "Dyrare",
  typeOfRooms: "Upstairs twin room, shared toilet and shower.",
  other: "Just a few rooms.",
  website: "https://olandsro.se/",
  booking: "Contact the bridal couple.",
  breakfast: "Included"
}},
  {"en-gb":{
    title: "Stf Hagaby",
    description: "Big hostel! Here will most of the guests stay.",
    distanceToParty: "19 km",
    typeOfRooms: "Cottage, hammock, two to four bed rooms.",
    priceCategory: "Billigare",
    other: "There will be a barbecue here on the Friday before the wedding. Sauna and outdoor gym are available.",
    website: "https://www.svenskaturistforeningen.se/boende/stf-hagabylantgarden-vandrarhem/",
    booking: "Contact Stf Hagaby.",
    breakfast: "Buy or fix your own."

  },
  "sv-se":{
    title: "Stf Hagaby",
    description: "Stort vandrahem! Här kommer en hel hög av brudens släkt befinna sig.",
    distanceToParty: "19 km",
    typeOfRooms: "Stuga, hängmatta, två till fyrbäddsrum.",
    priceCategory: "Billigare",
    other: "Här kommer det arrangeras en grillning på fredagen innan bröllopet. Bastu och utegym finns tillgängligt.",
    website: "https://www.svenskaturistforeningen.se/boende/stf-hagabylantgarden-vandrarhem/",
    booking: "Kontakta Stf Hagaby.",
    breakfast: "Köp till eller fixa eget."

  }, 
},
  {"sv-se":{
    title: "Äleklintagård",
    description: "Önskas det ett morgondopp? Här bor man i gränslandet mellan Alvaret och strandkanten.",
    distanceToParty: "12 km",
    typeOfRooms: "Rum i ett hus, 2 fyrbäddsrum och 1 tvåbäddsrum.",
    priceCategory: "-",
    other: "",
    website: "http://aleklintagard.se/",
    booking: "Nämn Simon vid bokning, då rummen är preliminärt bokade. Hör gärna av dig till brudparet om du har bokat!",
    breakfast: "Tillgång till kök."

  },
  "en-gb":{
    title: "Äleklintagård",
    description: "If you like to swim, this might be the place for you!",
    distanceToParty: "12 km",
    typeOfRooms: "Room in a cottage, 2 rooms with four beds and 1 room with two beds.",
    priceCategory: "-",
    other: "",
    website: "http://aleklintagard.se/",
    booking: "Mention Simon when booking, as rooms are provisionally booked. Feel free to contact the bridal couple if you have booked!",
    breakfast: "Access to kitchen."

  }, 
},
  {"sv-se":{
    title: "Wannborga",
    description: "För det vinälskande sällskapet",
    distanceToParty: "15 km",
    typeOfRooms: "Två hus med flera dubbelrum",
    priceCategory: "-",
    other: "Hela huset måste hyras, perfekt för er som vill bo ihop.",
    website: "http://wannborga.se/",
    booking: "Kontakta brudparet.",
    breakfast: "Oklart"

  },
  "en-gb":{
    title: "Wannborga",
    description: "For the wine-loving company",
    distanceToParty: "15 km",
    typeOfRooms: "Two houses with several double rooms.",
    priceCategory: "-",
    other: "The whole house must be rented, perfect for those who want to live together.",
    website: "http://wannborga.se/",
    booking: "Contact the bridal couple.",
    breakfast: "Unclear"

  }, 
},
  {"sv-se":{
    title: "Festlokalen",
    description: "Tänker du gå sist från festen? Bo gratis på plats!",
    distanceToParty: "En trappa",
    typeOfRooms: "Loft och bibliotek",
    priceCategory: "Gratis",
    other: "Ta med sovsäck och liggunderlag/madrass. Obs! Dusch saknas.",
    website: "",
    booking: "Kontakta brudparet",
    breakfast: "Saknas om du inte har tur att hitta några kvarglömda chips."

  },
  "en-gb":{
    title: "House of the wedding party",
    description: "Are you planning to dance all night long? Stay free on site!",
    distanceToParty: "A stair",
    typeOfRooms: "Attic and library.",
    priceCategory: "Gratis",
    other: "Bring sleeping bag and sleeping pad. NB! Shower is missing.",
    website: "",
    booking: "Contact the bridal couple.",
    breakfast: "Missing if you're not lucky enough to find some leftover crisps. "

  }, 
},
]


const otherPlaces = {
  places: ["Källa hamn", "Wikegårds camping", "Södviks gästgivaregård", "Alvaret hotel och hostel", "Highway 136"]

}
const useStyles = makeStyles(theme => ({
  accommodationPaper: {
    marginTop: "3rem",
    padding: "1rem",
  },
  accommodationDescription: {
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  table: {
    maxWidth: '30rem',
  },
  noWrapLabel: {
    whiteSpace: "nowrap"
  },
  cell: {
    padding: "5px 5px 10px 5px"
  }
}))
const AccommodationPage = (props) => {
  const classes = useStyles();
  let intl = useIntl();
  if (intl.locale !== "sv-se" && intl.locale !== "en-gb"){
    intl.locale = "sv-se";
  }
  return (
    <>
      <SEO title="Boende" />
      <Container>
        <Typography variant="h2"><FormattedMessage id="accommodation.title"/></Typography>

        <Typography variant="body1"><FormattedMessage id="accommodation.subtitle"/></Typography>
        <br/>
        <Typography variant="body1"><FormattedMessage id="accommodation.description"/></Typography>
        {accommodations.map((accommodation, index) =>
          <Paper key={index} className={classes.accommodationPaper}>
            <Typography variant="h4">{accommodation[intl.locale].title}</Typography>
            <Typography className={classes.accommodationDescription} variant="body1">{accommodation[intl.locale].description}</Typography>
            {accommodation[intl.locale].distanceToParty && <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow><TableCell className={classes.cell}>
                  <Typography className={classes.noWrapLabel} variant="body1"><FormattedMessage id="accommodation.distanceToParty"/>: </Typography></TableCell>
                  <TableCell className={classes.cell}>
                    <Typography variant="body1">{accommodation[intl.locale].distanceToParty}</Typography></TableCell></TableRow>
                <TableRow><TableCell className={classes.cell}>
                  <Typography variant="body1"><FormattedMessage id="accommodation.typeOfRoom"/>: </Typography></TableCell>
                  <TableCell className={classes.cell}>
                    <Typography variant="body1">{accommodation[intl.locale].typeOfRooms}</Typography></TableCell></TableRow>
                <TableRow><TableCell className={classes.cell}>
                  <Typography variant="body1"><FormattedMessage id="accommodation.breakfast"/>: </Typography></TableCell>
                  <TableCell className={classes.cell}>
                    <Typography variant="body1">{accommodation[intl.locale].breakfast}</Typography></TableCell></TableRow>
                <TableRow><TableCell className={classes.cell}>
                  <Typography variant="body1"><FormattedMessage id="accommodation.website"/>: </Typography></TableCell>
                  <TableCell className={classes.cell}>
                    <Link variant="body1" href={accommodation[intl.locale].website} target="_blank"><FormattedMessage id="accommodation.clickHere"/></Link></TableCell></TableRow>
                <TableRow><TableCell className={classes.cell}>
                  <Typography variant="body1"><FormattedMessage id="accommodation.booking"/>: </Typography></TableCell>
                  <TableCell className={classes.cell}>
                    <Typography variant="body1">{accommodation[intl.locale].booking}</Typography></TableCell></TableRow>
                <TableRow><TableCell className={classes.cell}>
                  <Typography variant="body1"><FormattedMessage id="accommodation.other"/>: </Typography></TableCell>
                  <TableCell className={classes.cell}>
                    <Typography variant="body1">{accommodation[intl.locale].other}</Typography></TableCell></TableRow>
              </TableBody> </Table>}

          </Paper>)}
        <Paper className={classes.accommodationPaper}>
          <Typography variant="h4"><FormattedMessage id="accommodation.otherPlaces"/></Typography>
          <ul>
            {otherPlaces.places.map((x, index) =>
              <li key={index}>
                <Typography variant="body1">
                  {x}
                </Typography>
              </li>)}
          </ul>
        </Paper>
      </Container>
    </>
  );
}
export default AccommodationPage