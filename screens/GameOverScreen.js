import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={{uri: 'https://pressboxonline.com/wp-content/uploads/2019/11/orioles19-529-camden-yards-800x445.jpg'}}
          source={require('../assets/success.png')}
          style={styles.image} />
      </View>
      <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        Your phone needed{' '}<Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number{' '}<Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
        </View>
      <MainButton onPress={props.restartGame}>NEW GAME</MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primaryColor,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default GameOverScreen