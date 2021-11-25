import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";

const ButtonComponent = (props) => {
  let ButtonWrapper = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonWrapper = TouchableNativeFeedback;
  }

  return (
    <View style={style.buttonContainer}>
      <ButtonWrapper activeOpacity={0.6} onPress={props.onPress}>
        <View style={style.button}>
          <Text style={style.buttonText}> {props.children} </Text>
        </View>
      </ButtonWrapper>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 400,
  },

  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },

  buttonText: {
    color: colors.white,
    fontFamily: "open-sans",
    fontSize: 14,
    width: "100%",
  },
});

export default ButtonComponent;
