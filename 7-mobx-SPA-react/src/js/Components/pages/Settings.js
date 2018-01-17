import React from "react";
import { Link } from "react-router";


export default class Settings extends React.Component {
  render() {
    const { location } = this.props;
    console.log({location});
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return(
      <div>
        <h1> Hello Settings page</h1>
      </div>    
    )
  }
}