import React from "react";
import { View, StyleSheet } from "react-native";
import { PricingCard } from "react-native-elements";
import Constants from "expo-constants";

function AvailabilityScreen(props) {
  const toReservation = () => {
    props.navigation.navigate("Make a Reservation");
  };

  return (
    <View style={styles.container}>
      <PricingCard
        color="teal"
        title="Weekdays"
        price="$169"
        info={[
          "Monday through Thursday",
          "Includes free parking",
          "Free cancellation until 24 hours before check-in",
        ]}
        button={{
          title: "Book Now",
          icon: "book",
          onButtonPress: toReservation,
        }}
      />
      <PricingCard
        color="blue"
        title="Weekends"
        price="$199"
        info={[
          "Friday through Sunday",
          "Includes free parking",
          "Free cancellation until 24 hours before check-in",
        ]}
        button={{
          title: "Book Now",
          icon: "book",
          onButtonPress: toReservation,
        }}
      />
    </View>
  );
}

export default AvailabilityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
