import React, { useEffect, useState } from "react";
import SEO from "../components/seo";
import { useIntl, FormattedMessage } from "react-intl";
import Typography from '@material-ui/core/Typography';
import { makeStyles, Container } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  iframestyle: {
    height: "600px", width: "100%", border: "none",
    "@media screen and (max-width: 600px)": {
      height: "260px"
    }
  },
  container: {
    textAlign: "center"
  },
  highscoreList: {
    margin: "0 auto",
  }
}));

const GamePage = () => {
  const classes = useStyles();
  const [highscore, setHighscore] = useState([]);
  useEffect(() => {
    fetch(process.env.GAME_BACKEND_URL +`/api/highscore`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setHighscore(resultData);
      });
  }, []);
  return (
    <>
      <SEO title="Game" />
      <iframe className={classes.iframestyle} scrolling="no" src={process.env.GAME_URL}></iframe>
      <Container className={classes.container}>
        <Typography variant="h1"><FormattedMessage id="game.title" /></Typography>
        <Typography variant="body1"><FormattedMessage id="game.firstSection" /></Typography>
        <Typography variant="h2">Highscore</Typography>
        {highscore && <table className={classes.highscoreList}>
          <tr>
            <th><Typography variant="body1">Plats</Typography></th>
            <th><Typography variant="body1">Namn</Typography></th>
            <th><Typography variant="body1">Poäng</Typography></th></tr>

          {highscore.map((x, index) => <tr><td><Typography variant="body1">{index + 1}</Typography></td><td><Typography variant="body1">{x.name}</Typography></td><td><Typography variant="body1">{x.score}</Typography></td></tr>)}
        </table>
        }
      </Container>
    </>
  );
};

export default GamePage;