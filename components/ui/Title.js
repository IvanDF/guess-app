import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.gray500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.gray500,
    padding: 15,
  },
});

export default Title;
