import { ChurchImage } from "../components/churchimage";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";

const WeddingPage = (props) => {
    return (
        <>
            <SEO title="Vigsel" />
            <ChurchImage />
            <Container>
                <Typography variant="h1">Vigsel</Typography>
                <Typography variant="body1">
                    Vigseln kommer äga rum 4 juli klockan 14.00 i Föra kyrka, Föra Kyrkgata 1, 387 91 Borgholm.
            </Typography><br/>
                <Typography variant="body1">
                    Kommer du med bil finns en parkering vid festlokalen Föragården, Föra 88, 387 91 Borgholm. Därifrån är det gångavstånd till kyrkan.
                    Närmaste busshållplats heter "Föra vsk" och ligger 1,5 km från kyrkan. Har du funderingar hur du ska komma till kyrkan är det bara att höra av sig!</Typography>
                    <br/>
                    <Typography variant="h2">Vad ska man då ha för kläder?</Typography>
                <Typography variant="body1">
                     Klädkoden för dagen är sommarfin så ta på dig något du tycker passar på ett bröllop och känner dig fin i!
</Typography>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2172.2765285987966!2d16.864804715979826!3d57.01257198090899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46f808f8612fb311%3A0x2925491fbcb701a6!2sF%C3%B6ra%20Kyrkgata%201%2C%20387%2091%20Borgholm!5e0!3m2!1ssv!2sse!4v1578758659408!5m2!1ssv!2sse" width="400" height="300" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe> */}
            </Container>
        </>);
}

export default WeddingPage
