import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByRating = (rating, rating2) => {
    return results.filter(result => {
      if (result.rating === rating) {
        return result.rating;
      } else if (result.rating === rating2) {
        return result.rating;
      }
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
        <ResultsList results={filterResultsByRating(5)} title="5 Paws" />
        <ResultsList results={filterResultsByRating(4, 4.5)} title="4 Paws" />
        <ResultsList results={filterResultsByRating(3, 3.5)} title="3 Paws" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
