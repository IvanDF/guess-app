import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...style.input, ...props.style }} />;
};

const style = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
