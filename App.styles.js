import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  root: {
    flex: "1",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",

    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
    alignContent: "space-between",
  },
  optionContainer: {
    // styling the border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,

    // styles of the container
    width: "50%",
    height: "48%",
    alignItems: "center",
    padding: 10,
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {},
});

export default styles;
