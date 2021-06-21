import React from "react";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";
import { PartyImage } from "../components/partyimage";
import { ToastMastersImage } from "../components/toastmatersimage";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
const PartyPage = props => {
  const { width } = useWindowSize();
  return (
    <>
      <SEO title="Fest" />
      <PartyImage />
      <Container>
        <Confetti width={width - 30} recycle={false} />
        <Typography variant="h1">
          <FormattedMessage id="party.title" />
        </Typography>
        <br />
        <Typography variant="body1">
          <FormattedMessage id="party.firstSection" />
        </Typography>
        <br />
        <Typography variant="body1">
          <FormattedMessage id="party.secondSection" />
        </Typography>
        {/* <Typography variant="body1">
          <FormattedHTMLMessage id="party.thirdSection" />
        </Typography> */}
        <Typography variant="body1">
          <FormattedHTMLMessage id="party.email" />
          <a style={ {color: 'darkgreen' }} href='mailto:forabrollop@gmail.com'>forabrollop@gmail.com</a>
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="party.telephone" />
        </Typography>
        <br />
        <Typography variant="body1">
          <FormattedMessage id="party.aboutChildren" />
        </Typography>
        <br />
        <Typography variant="h2">
          <FormattedMessage id="party.meetToastmasters" />
        </Typography>
        <ToastMastersImage />
        <Typography variant="body1">
          <FormattedMessage id="party.aboutToastmasters" />
        </Typography>
      </Container>
    </>
  );
};

export default PartyPage;
