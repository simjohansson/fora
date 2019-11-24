import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";
import { PartyImage } from "../components/partyimage";

const PartyPage = (props) => {
      return (
      <Layout location={props.location}>
        <SEO title="Fest" />
        <Container>
        <Typography variant="h1">Fest</Typography>
        <PartyImage/>
            </Container>
            </Layout>);
}

export default PartyPage