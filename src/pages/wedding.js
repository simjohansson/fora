import { ChurchImage } from "../components/churchimage";
import React from "react";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const WeddingPage = props => {
  return (
    <>
      <SEO title="Vigsel" />
      <ChurchImage />
      <Container>
        <Typography variant="h1">
          <FormattedMessage id="wedding.title" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="wedding.firstSection" />
        </Typography>
        <br />
        <Typography variant="body1">
          <FormattedMessage id="wedding.secondSection" />
        </Typography>
        <br />
        <Typography variant="h2">
          <FormattedMessage id="wedding.whatToWearTitle" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="wedding.whatToWearDescription" />
        </Typography>
      </Container>
    </>
  );
};

export default WeddingPage;
