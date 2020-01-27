import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Blub from '../components/Blub';
class home extends Component {
  state = {
    blubs: null
  };
  componentDidMount() {
    axios
      .get('/blubs')
      .then(res => {
        console.log(res.data);
        this.setState({
          blubs: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentBlubsMarkup = this.state.blubs ? (
      this.state.blubs.map(blub => <Blub blub={blub}/>)
    ) : (
      <p>loading please wait...</p>
    );
    return (
      <Grid container spacing={10}>
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
