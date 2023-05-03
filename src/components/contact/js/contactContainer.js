import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Contact from "./contact";
import "../css/contact.css";
import {
  Facebook,
  Favorite,
  GitHub,
  Home,
  Instagram,
  Language,
  LinkedIn,
} from "@material-ui/icons";

function ContactContainer(props) {
  return (
    <>
      <Grid container justify="center" className="contactContainer">
        <Grid item xs={12} className="contactHead">
          <p>Contact</p>
        </Grid>
        <Grid item xs={1} sm={4}></Grid>
        <Grid item xs={10} sm={4}>
          <Contact />
        </Grid>
        <Grid item xs={1} sm={4}></Grid>
      </Grid>
      <Grid container justify="center" className="bottomNav">
        <Grid item>
          <IconButton>
            <a href="https://www.instagram.com/nithish_msn/" rel="noopener">
              <Instagram color="action" />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a href="https://www.facebook.com/nithu.mucherla" rel="noopener">
              <Facebook color="action" />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => props.changeView({ currentView: "home" })}>
            <Home color="secondary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/sai-nithish-mucherla"
              rel="noopener"
            >
              <LinkedIn color="action" />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a href="https://github.com/nithish-mucherla" rel="noopener">
              <GitHub color="action" />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a href="https://nithish-mucherla.github.io" rel="noopener">
              <Language color="action" />
            </a>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <p className="credits">Made with &#9829; by Nithish Mucherla</p>
      </Grid>
    </>
  );
}

export default ContactContainer;
