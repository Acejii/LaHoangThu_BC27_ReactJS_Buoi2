import React, { Component } from "react";
import data from "./data.json";
import "./Glasses.scss";
import Header from "./components/Header/Header";
import Model from "./components/Model/Model";
import GlassItem from "./components/GlassItem/GlassItem";

class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectGlasses: null,
    };
  }

  handleSelectClasses = (item) => {
    if (!item) {
      return;
    }
    this.setState({ selectGlasses: item });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />

        <Model selectGlasses={this.state.selectGlasses} />

        <GlassItem data={data} onSelect={this.handleSelectClasses} />
      </div>
    );
  }
}

export default Glasses;
