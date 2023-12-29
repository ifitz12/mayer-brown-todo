import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import RowItem from "../components/RowItem";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const [list, setList] = useState([]);

  const removeRow = (key) => {
    const updatedList = list.filter((item) => item.key !== key);
    setList(updatedList);
  };

  const handleTextChange = (key, newText) => {
    const updatedList = list.map((item) =>
      item.key === key ? { ...item, text: newText } : item
    );
    setList(updatedList);
  };

  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <RowItem
            item={item}
            text={item.key}
            onChangeText={handleTextChange}
            onDelete={removeRow}
          />
        )}
      />

      <TouchableOpacity
        style={styles.newToDoButtonStyle}
        onPress={() => {
          const newKey = String(list.length + 1);
          setList([...list, { key: newKey, text: "" }]);
        }}
      >
        <Text style={{ fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newToDoButtonStyle: {
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
