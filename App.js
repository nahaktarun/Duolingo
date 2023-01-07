import React from "react";

import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import styles from "./App.styles";
const App = () => {
  const name = "Tarun";
  const time = 7;
  const getName = () => {
    return name;
  };
  return (
    <View style={styles.root}>
      <Text>Which of these is the "glass"</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            source={{ uri: "" }}
            style={styles.optionImage}
            resizeMode="contain"
          />
          <Text style={styles.optionText}>Glass¯</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
