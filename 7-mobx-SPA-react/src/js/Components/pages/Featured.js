import React from "react";
import { Link } from "react-router";

const testFunction = () => <p> little text </p>

export default class Featured extends React.Component {
  render() {
    return(
      <div>
        {testFunction()}
        <h1> Featured page </h1>
      </div>    
    )
  }
}