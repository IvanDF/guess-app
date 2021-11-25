import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: Platform.OS === "ios" ? "15%" : "33.33%",
    backgroundColor:
      Platform.OS === "android" ? colors.primary : colors.lightBg,
    borderBottomEndRadius: Platform.OS === "ios" ? 0 : 80,
    borderBottomColor: Platform.OS === "ios" ? colors.primary : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 2 : 0,
  },

  headerAndroid: {
    height: "33.33%",
    backgroundColor: colors.primary,
    borderBottomEndRadius: 80,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },

  headerIOS: {
    height: "15%",
    backgroundColor: colors.lightBg,
    borderBottomEndRadius: 0,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },

  headerTitle: {
    color: Platform.OS === "ios" ? colors.primary : colors.black,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
