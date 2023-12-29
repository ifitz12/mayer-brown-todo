import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RowItem from "../components/RowItem";

const HomeScreen = () => {
  const [list, setList] = useState([]);

  const removeRow = (key) => {
    const updatedList = list.filter(item => item.key !== key);
    setList(updatedList);
    
  };

  return (
    <View style={styles.viewStyle}>
      <FlatList data={list} 
      renderItem={({item }) => (
        <RowItem item={item} onDelete={removeRow}/>
      )}
       
      />

      <TouchableOpacity
        style={styles.newToDoButtonStyle}
        onPress={() => {
          setList([...list,{ key: String(list.length+1)}]);
        }}
      >
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
