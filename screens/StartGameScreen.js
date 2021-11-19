import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BodyText from "../components/BodyText";
import ButtonComponent from "../components/ButtonComponent";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const confirmInputHanld = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has yo be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: setEnteredValue("") }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={style.summaryContainer}>
        <BodyText style={defaultStyles.bodyText}> You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <ButtonComponent onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </ButtonComponent>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={style.screen}>
        <BodyText style={style.title}> Start a new Game! </BodyText>
        <Card style={style.intputContainer}>
          <BodyText>Select a number</BodyText>
          <Input
            style={style.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={style.buttonsContainer}>
            <View style={style.button}>
              <Button
                title="Reset"
                onPress={() => {
                  setEnteredValue(""), setConfirmed(false);
                }}
                color={colors.accent}
              />
            </View>
            <View style={style.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHanld}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    color: "#333",
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },

  intputContainer: {
    width: 300,
    borderBottomLeftRadius: 30,
  },

  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  button: {
    width: 100,
  },

  input: {
    width: 50,
    textAlign: "center",
  },

  summaryContainer: { marginTop: 20, alignItems: "center" },
});

export default StartGameScreen;
