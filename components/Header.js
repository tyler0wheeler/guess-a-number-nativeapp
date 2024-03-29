import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Colors from '../constants/colors'
import TitleText from './TitleText'
const Header = props => {
  return (
    <View style={{
      ...styles.header,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid
      })
    }}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: Colors.primaryColor ,
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 3
  },
  headerAndroid: {
    backgroundColor: "white",
    borderBottomColor: 'transparent',
  },
  title: {
    color: Platform.OS === "ios" ? "white" : "black"
  }
})
export default Header