import React from "react"
import Layout from "../components/layout"
import simcar from "../images/simcarcrop.jpg"
import styled from "styled-components"
import SEO from "../components/seo"
import underconstructiongif from '../gifs/underconstruction.gif'
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextImageContainer = styled.div`

display: flex;
height: 60vh;
line-height: 1;
justify-content: space-around;
flex-direction: column;
`;

const ImageContainer = styled.div`

background-image: url(${simcar});
background-size: cover;
    background-position: top left;
    background-attachment: fixed;
    @media (max-width:300px) {
      background-attachment: initial;
    }
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Föra bröllop" />
<ImageContainer><TextImageContainer></TextImageContainer></ImageContainer>
    <Container>Mer information kommer
      <img src={underconstructiongif} /></Container>
  </Layout>
)

export default IndexPage
