import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ searchTerm, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search for Todo"
        value={searchTerm}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "lightgray",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  
  inputStyle: {
    flex: 1,
    fontSize: 18,
    left: 15,
  }
});

export default SearchBar;
