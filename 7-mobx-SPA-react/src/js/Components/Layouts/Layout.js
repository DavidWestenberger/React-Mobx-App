import React from "react";
import Header from "./Header";


export default class Layout extends React.Component {
  render() {
    console.log("props in layout");
    console.log(this.props);
    return(
      <div>
        <Header pathName={this.props.pathName} />
        {this.props.children}
      </div>    
    )
  }
}