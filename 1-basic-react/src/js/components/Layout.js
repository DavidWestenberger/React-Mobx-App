import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      name: "Will",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    setTimeout(() => {
      this.setState({name: "bob"});
    }, 10000)
    return (
      <div>
        {this.state.name}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
