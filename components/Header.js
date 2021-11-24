import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "33.33%",
    paddingTop: 40,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 80,
  },

  headerTitle: {
    color: colors.black,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
