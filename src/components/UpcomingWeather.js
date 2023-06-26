import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const UpcomingWeather = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <Text>UpcomingWeather</Text>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})