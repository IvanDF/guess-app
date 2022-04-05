import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: deviceWidth < 400 ? 18 : 36,
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
});

export default Card;
