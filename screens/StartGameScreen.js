import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberHandelr = (enteredText) => setEnteredNumber(enteredText);

  const resetInputHadnler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHadnler }]
      );
      return;
    }

    onPickedNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={enteredNumberHandelr}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHadnler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // for android
    elevation: 4,
    // for ios
    shadowColor: "#333",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 10,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  button: {
    flex: 1,
  },
});

export default StartGameScreen;
