import React, { Component } from "react";
import { View, Platform } from "react-native";
import HomeScreen from "./HomeComponent";
import ThingsToDoScreen from "./ThingsToDoComponent";
import AvailabilityScreen from "./AvailabilityComponent";
import ReservationScreen from "./ReservationComponent";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#35a2a6" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

const ThingsToDoNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Things To Do"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#35a2a6",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Things to Do"
        component={ThingsToDoScreen}
        options={{ title: "Things to Do" }}
      />
    </Stack.Navigator>
  );
};

const AvailabilityNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Availability"
        component={AvailabilityScreen}
        options={{ title: "Availability" }}
      />
    </Stack.Navigator>
  );
};

const ReservationNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Make a Reservation"
        component={ReservationScreen}
        options={{ title: "Make a Reservation" }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#7fdfe3" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Things to Do"
          component={ThingsToDoNavigator}
          options={{ title: "Things to Do" }}
        />
        <Drawer.Screen
          name="Availability"
          component={AvailabilityNavigator}
          options={{ title: "Availability" }}
        />
        <Drawer.Screen
          name="Make a Reservation"
          component={ReservationNavigator}
          options={{ title: "Make a Reservation" }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
