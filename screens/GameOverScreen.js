import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return (
      <ScrollView>
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
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
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
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    fontSize: Dimensions.get('window').height < 400 ? 60 : 20,
    textAlign: 'center'
  }
})

export default GameOverScreen