import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelpAPI from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelpAPI.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Düsseldorf",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("there is a problem happend with the server.");
    }
  };

  searchApi("pasta");

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <View style={styles.container}>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <Text>We have found {results.length} results</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  error: {
    color: "red",
  },
});

export default SearchScreen;
