import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
  return (
    <Text style={{ ...style.text, ...props.style }}> {props.children} </Text>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
