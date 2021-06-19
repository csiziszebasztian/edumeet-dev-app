import React from "react";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  me: {
    /*width: "100%",
    height: "100%",*/
    border: "3px solid black",
    margin: "6px",
    backgroundColor: "orange"
  }
};

const Me = (props) => {
  const { classes } = props;
  return <div className={classnames(classes.me)} style={props.style}>{props.value}</div>;
};

export default withStyles(styles)(Me);