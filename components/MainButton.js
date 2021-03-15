import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity

  if(Platform.OS === "andriod" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback
  }

  return (
    <View style={styles.ButtonContainer}>
    <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  ButtonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default MainButton;
