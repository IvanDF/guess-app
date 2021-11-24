import React from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import BodyText from "../components/BodyText";
import ButtonComponent from "../components/ButtonComponent";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
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
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    maxWidth: "80%",
    marginVertical: Dimensions.get("window").height / 30,
    overflow: "hidden",
  },
});

export default GameOverScreen;
