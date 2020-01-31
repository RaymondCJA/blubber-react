import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "react-router-dom/Link";

// MUI STUFF
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

export class Blub extends Component {
  render() {
    const {
      classes,
      blub: {
        body,
        createdAt,
        userImage,
        userHandle,
        blubId,
        likeCount,
        commentCount
      }
    } = this.props; // const classes = this.prop.classes; (destructuring)
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent class={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Blub);
