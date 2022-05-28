import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function ThingsToDo(props) {
  const renderAmenitiesItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: require("../assets/amenities-imgs/pool-1.jpeg") }}
      />
    );
  };

  return (
    <FlatList
      data={props.amenities}
      renderItem={renderAmenitiesItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default ThingsToDo;
