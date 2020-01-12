import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footer: {
        height: "4rem",
        marginTop: "2rem",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: "1rem"
    }
}));

const Footer = () => {
    const { footer } = useStyles();
    return (<div className={footer}><Typography variant="h4">© Caroline & Simon</Typography></div>);
}

export default Footer;