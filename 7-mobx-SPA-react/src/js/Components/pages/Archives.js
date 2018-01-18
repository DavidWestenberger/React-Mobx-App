import React from "react";
import { Link } from "react-router";


export default class Archives extends React.Component {
  render() {
    console.log("Archives props");
    console.log(this.props);
    var articleName = this.props.match.params.name;
    return(
      <div>
        <h1> Archives page</h1>
        <h4> Param passed: {articleName}</h4>
      </div>    
    )
  }
}