import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import BodyText from "./BodyText";

const NumberContainer = (props) => {
  return (
    <View style={style.container}>
      <BodyText style={style.number}>{props.children}</BodyText>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    color: colors.primary,
  },
});

export default NumberContainer;
