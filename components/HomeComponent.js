import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const Home = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.header}>Welcome to OC</Text>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator
        style={style.scroll}>
        {props.gallery.map((item) => {
          return <Image
            key={item.id}
            source={item.image}
            style={style.image} />
        })}
      </ScrollView>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: 'teal'
  },
  header: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Optima, sans-serif'
  },
  scroll: {
    width
  },
  image: {
    width,
    height,
    resizeMode: 'cover'
  }
})
export default Home;