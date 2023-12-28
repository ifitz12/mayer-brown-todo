import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RowItem from "../components/RowItem";

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        <RowItem></RowItem>
      </ScrollView>

      <TouchableOpacity style={styles.newToDoButtonStyle}>
        <Text style={{ fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newToDoButtonStyle: {
    borderWidth: 1,
    borderColor: "#50e3c2",
    backgroundColor: "#50e3c2",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 100,
    position: "absolute",
    margin: 30,
    right: 10,
    bottom: 20,
  },

  viewStyle: {
    flex: 1,
  },
});

export default HomeScreen;
