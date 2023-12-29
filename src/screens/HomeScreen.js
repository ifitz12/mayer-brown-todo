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
  const [searchTerm, setSearchTerm] = useState("");

  //Returns a new list that excludes the element containing the provided key
  const removeRow = (key) => {
    const updatedList = list.filter((item) => item.key !== key);
    setList(updatedList);
  };

  /*Updates the text for a specific rowItem based on key. 
  If the given key matches an element in our list, the text is updated, otherwise it is ignored. */
  const handleTextChange = (key, newText) => {
    const updatedList = list.map((item) =>
      item.key === key ? { ...item, text: newText } : item
    );
    setList(updatedList);
  };

  /*When search bar is not empty, list will be filtered 
  and return items that contain the given search term*/
  const filteredList = list.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.viewStyle}>
      <SearchBar
        term={searchTerm}
        onTermChange={(text) => setSearchTerm(text)}
      ></SearchBar>
      <FlatList
        data={filteredList}
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
        <Text style={styles.toDoButtonTextStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newToDoButtonStyle: {
    backgroundColor: "#674A31",
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

  toDoButtonTextStyle: {
    fontSize: 30,
    color: "white",
  },

  viewStyle: {
    flex: 1,
  },
});

export default HomeScreen;
