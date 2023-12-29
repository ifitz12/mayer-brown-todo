import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const RowItem = ({ item, onChangeText, onDelete }) => {
 
  return (
    <View style={styles.viewContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Todo"
          value={item.text}
          onChangeText={(newText) => onChangeText(item.key, newText)}
        />

        <TouchableOpacity onPress={() => onDelete(item.key)}>
          <Image
            style={styles.buttonStyle}
            source={require("../../assets/trashIcon.png")}
          />
        </TouchableOpacity>
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
