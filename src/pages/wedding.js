import { ChurchImage } from "../components/churchimage";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";

const WeddingPage = (props) => {
      return (
      <Layout location={props.location}>
        <SEO title="Vigsel" />
        <Container>
        <Typography variant="h1">Vigsel</Typography>
            <ChurchImage/>
            </Container>
            </Layout>);
}

export default WeddingPage
