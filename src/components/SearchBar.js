import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.background}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        value={props.term}
        onChangeText={props.onChangeTerm}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e5e5e5",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default SearchBar;
