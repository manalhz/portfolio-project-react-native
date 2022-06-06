import React, { Component } from "react";
import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";
import { AMENITIES } from "../shared/amenities";

class ThingsToDoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.amenities.map((amenity, id) => (
            <Card key={id}>
              <View style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={amenity.image}
                />
                <Text style={styles.name}>{amenity.name}</Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 100,
  },
});

export default ThingsToDoScreen;
