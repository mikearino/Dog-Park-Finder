import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../components/api/Yelp";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const searchApi = () => {
    yelp.get("/");
  };

  return (
    <View>
      <Text>{keyword}</Text>
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        onKeywordSubmit={() => {
          console.log("submitted");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
