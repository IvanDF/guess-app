import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.iosButtonPresse, styles.button] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.gray500,
    borderRadius: 30,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // for android
    elevation: 16,
  },

  iosButtonPresse: {
    opacity: 0.65,
    backgroundColor: Colors.gray200,
  },

  buttonText: {
    color: Colors.gray500,
    textAlign: "center",
  },
});

export default PrimaryButton;
