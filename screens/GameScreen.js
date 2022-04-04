import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent`s Gues</Title>
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
