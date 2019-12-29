import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByRating = rating => {
    return results.filter(result => {
      // return rating <= result.rating ? result.rating : null;
      return result.rating === rating;
    });
  };
  console.log(results);

  return (
    <>
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        onKeywordSubmit={() => searchApi(keyword)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByRating(5)}
          title="Great Dog Park"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByRating(4)}
          title="Good Dog Park"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByRating(3.5)}
          title="Skip It"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
