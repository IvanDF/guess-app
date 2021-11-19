import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";
import ButtonComponent from "../components/ButtonComponent";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={style.screen}>
      <TitleText style={style.text}>The Game is Over!</TitleText>
      <BodyText style={style.text}>
        Number of rounds: {props.roundsNumber}
      </BodyText>
      <View style={style.imageContainer}>
        <Image
          // Local image
          source={require("../assets/gameover.png")}
          // Online image
          // source={{uri: "url"}}
          resizeMode="center"
        />
      </View>
      <BodyText style={style.text}>
        The user number was:
        <BodyText style={{ fontFamily: "open-sans-bold", fontSize: 18 }}>
          {props.userNumber}
        </BodyText>
      </BodyText>
      <ButtonComponent onPress={props.onRestart}>New Game</ButtonComponent>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.black,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    maxWidth: "80%",
    marginVertical: 20,
    overflow: "hidden",
  },
});

export default GameOverScreen;
