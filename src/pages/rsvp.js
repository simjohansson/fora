import React from "react";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { FlowersImage } from "../components/flowerimage";
const RSVPPage = () => {
  return (
    <>
      <SEO title="RSVP" />
      <FlowersImage/>
      <Container>
          <Typography variant="h2"><FormattedMessage  id="rsvp.title"/></Typography>
          <Typography variant="body1"><FormattedHTMLMessage  id="rsvp.firstSection"/></Typography>
          <Typography variant="body1"><FormattedMessage  id="rsvp.bbqInfo"/></Typography>
          <Typography variant="body1"><a style={{color: "darkgreen"}} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfzuK7ksDmVoZ7_0jGCi7EUGzx-F93drMlwjHBEZv6AF0AYMA/viewform?usp=sf_link"><FormattedMessage  id="rsvp.rsvpHere"/></a></Typography>
      </Container>
    </>
  );
};

export default RSVPPage;
