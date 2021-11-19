import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => {
  return (
    <Text style={{ ...style.title, ...props.style }}> {props.children} </Text>
  );
};

const style = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 28,
  },
});

export default TitleText;
