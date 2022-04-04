import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

const generateRandomBetween = (min, max, exlude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent`s Gues</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>asd</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
});

export default GameScreen;
