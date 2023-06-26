import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'

const sunriseUrl = 'https://image.shutterstock.com/image-photo/sunset-sun-clouds-on-blue-260nw-1724058607.jpg'

const CurrentWeather = () => {
 
  return (
  <SafeAreaView style={styles.wrapper}>
  <View style={styles.container}>
     <Image 
     style={{
      resizeMode: 'contain',
      height: 200,
      width: 200,
    }}
    source= {{uri: sunriseUrl}} />
    <Text style={styles.temp}>6</Text>
    <Text style={styles.feels}>Feels like 0 </Text>
    <View style={styles.highLowWrapper}>
      <Text style={styles.highLow}>High: 8</Text>
      <Text style={styles.highLow}>Low: 6</Text>
    </View>
    </View>
    <View style={styles.bodyWrapper}>
      <Text style={styles.description}>Its warm out here</Text>
      <Text style={styles.message}>Its beautiful outside</Text>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "orange",
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 35,
    color: "black"
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 45
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
