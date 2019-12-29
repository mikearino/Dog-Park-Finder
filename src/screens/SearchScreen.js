import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        onKeywordSubmit={() => searchApi(keyword)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Great Dog Park" />
      <ResultsList title="Good Dog Park" />
      <ResultsList title="Skip It" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
