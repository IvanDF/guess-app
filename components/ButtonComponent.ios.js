import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={style.button}>
        <Text style={style.buttonText}> {props.children} </Text>
      </View>
    </TouchableOpacity>
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

  buttonText: {
    color: colors.white,
    fontFamily: "open-sans",
    fontSize: 14,
    width: "100%",
  },
});

export default ButtonComponent;
