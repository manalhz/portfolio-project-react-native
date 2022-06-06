import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { GALLERY } from "../shared/gallery";

const { width } = Dimensions.get("window");
const height = width * 0.9;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
    };
  }

  toReservation = () => {
    this.props.navigation.navigate("Make a Reservation");
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.header}>Welcome to OC</Text>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator
          style={style.scroll}
        >
          {this.state.gallery.map((item) => {
            return (
              <Image key={item.id} source={item.image} style={style.image} />
            );
          })}
        </ScrollView>
        <View style={{ height: 400, backgroundColor: "#7fdfe3" }}>
          <Button
            title={"Book Now"}
            containerStyle={{
              width: 300,
              height: 100,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={this.toReservation}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#7fdfe3",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "cursive",
    marginVertical: 20,
  },
  scroll: {
    width,
  },
  image: {
    width,
    height,
    resizeMode: "cover",
    marginVertical: 20,
  },
});
export default HomeScreen;
