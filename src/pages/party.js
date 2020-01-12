import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";
import { PartyImage } from "../components/partyimage";
import { ToastMastersImage } from "../components/toastmatersimage";

const PartyPage = (props) => {
    return (
        <Layout location={props.location}>
            <SEO title="Fest" />
            <PartyImage />
            <Container>
                <Typography variant="h1">Fest</Typography>
                <br/>
                <Typography variant="body1">Efter vigseln fortsätter firandet i Föragården som ligger på gångavstånd från kyrkan.
                Här kommer vi mingla, äta och dansa hela natten lång!</Typography>
                <br/>
                <Typography variant="body1">
                    De skulle vara jätteroligt om du vill hålla ett tal, sjunga, spexa eller dela med dig av något annat under festen. Anmäl ditt viktiga bidrag senast den 31 maj till:</Typography>
                <Typography variant="body1"> Epost: <a style={{ color: "darkgreen" }} href="mailto:forabrollop@gmail.com">forabrollop@gmail.com</a> </Typography>
                <Typography variant="body1"> Sms/telefon: 0768902918 </Typography>
                <br/>
                    <Typography variant="body1">Bröllopsfesten är en tillställning med vuxna i åtanke. Önskar du ha med ditt eller dina barn är det bra att veta att det inte kommer arrangeras något speciellt upplägg för dem.</Typography>
                <br/>
                <Typography variant="h2">Möt Våra Toastmasters</Typography>
                <ToastMastersImage />
                <Typography variant="body1">
                    Med denna härliga trio har man aldrig tråkigt! Jenny, Julia och Matilda kan allt från handboll till fiske och vi kan tryggt lämna över festen i deras händer!
                </Typography>

            </Container>
        </Layout>);
}

export default PartyPage