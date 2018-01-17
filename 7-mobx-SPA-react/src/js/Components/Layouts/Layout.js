import React from "react";
import { Link } from "react-router";
import Header from "./Header";


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    console.log({location});
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return(
      <div>
        <Header />
        <h1> Hello </h1>
          {this.props.childern}
      </div>    
    )
  }
}