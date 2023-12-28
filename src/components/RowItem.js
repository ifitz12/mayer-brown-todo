import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

const RowItem = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInputStyle} placeholder="Enter Todo" />

        <Image
          style={styles.buttonStyle}
          source={require("../../assets/trashIcon.png")}
          onPress={"//TODO"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgray",
    paddingHorizontal: 10,
  },

  textInputStyle: {
    flex: 1,
    height: 40,
  },

  buttonStyle: {
    width: 22,
    height: 22,
    marginLeft: 10
  },
});
export default RowItem;
