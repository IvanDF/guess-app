import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    maxWidth: "80%",
    alignItems: "center",
    // Shadow only on iOS
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,

    // for android
    elevation: 5,

    backgroundColor: colors.lightBg,
    padding: 10,
    borderRadius: 8,
  },
});

export default Card;
