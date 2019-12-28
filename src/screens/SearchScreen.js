import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <View>
      <Text>{keyword}</Text>
      <SearchBar keyword={keyword} onKeywordChange={setKeyword} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
