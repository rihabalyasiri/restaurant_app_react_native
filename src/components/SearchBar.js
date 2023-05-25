import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 15,
    }
});

export default SearchBar;
