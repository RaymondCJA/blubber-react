import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import Blub from "../components/Blub";

export class home extends Component {
  state = {
    blubs: null
  };
  componentDidMount() {
    axios
      .get("/blubs")
      .then(res => {
        this.setState({
          blubs: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentBlubsMarkup = this.state.blubs ? (
      this.state.blubs.map(blub => <Blub key={blub.blubId} blub={blub} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentBlubsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
