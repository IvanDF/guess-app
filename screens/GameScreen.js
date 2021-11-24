import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Dimensions, FlatList, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";
import ButtonComponent from "../components/ButtonComponent";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const { userChoice, onGameOver } = props;

  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const renderList = (listLenght, item) => {
    return (
      <Card style={style.listItem}>
        <BodyText>#{listLenght - item.index}</BodyText>
        <BodyText>{item.item}</BodyText>
      </Card>
    );
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((curPasrGuesses) => [
      nextNumber.toString(),
      ...curPasrGuesses,
    ]);
  };

  useEffect(() => {
    const updateDeviceHeight = () => {
      setDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateDeviceHeight);

    return () => {
      Dimensions.removeEventListener("change", updateDeviceHeight);
    };
  }, [Dimensions.get("window").height]);

  return (
    <View style={style.screen}>
      <BodyText>Opponent's Guess</BodyText>
      {deviceHeight < 500 ? (
        <View style={style.controls}>
          <ButtonComponent onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" color={colors.white} />
          </ButtonComponent>
          <NumberContainer> {currentGuess} </NumberContainer>
          <ButtonComponent onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" color={colors.white} />
          </ButtonComponent>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={style.buttonContainer}>
            <ButtonComponent onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" color={colors.white} />
            </ButtonComponent>
            <ButtonComponent onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" color={colors.white} />
            </ButtonComponent>
          </Card>
        </View>
      )}
      <View style={style.listContainer}>
        {/* <ScrollView contentContainerStyle={style.list}>
          {pastGuesses.map((guess, index) =>
            renderList(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={style.list}
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderList.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 300,
    maxWidth: "80%",
  },

  listContainer: {
    // Flex 1 adjust scoll on android
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%",
  },

  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  listItem: {
    borderColor: colors.primary,
    padding: 15,
    borderWidth: 0.25,
    marginVertical: 15,
    backgroundColor: colors.lightBg,
    flexDirection: "row",
    justifyContent: "space-around",
    // width: "100%",
    borderRadius: 8,
  },
});

export default GameScreen;
