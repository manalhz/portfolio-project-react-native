import React, { Component } from "react";
import { View } from "react-native";
import Home from "./HomeComponent";
import { GALLERY } from "../shared/gallery";
import { AMENITIES } from "../shared/amenities";
import ThingsToDo from "./ThingsToDoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      amenities: AMENITIES,
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "teal" }}>
        <Home gallery={this.state.gallery} />
        <ThingsToDo amenities={this.state.amenities} />
      </View>
    );
  }
}

export default Main;
