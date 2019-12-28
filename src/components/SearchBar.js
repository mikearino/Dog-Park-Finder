import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";

const SearchScreen = () => {
  return (
    <View>
      <Foundation name="trees" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="yellow"
        selectionColor="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
