import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";

const SearchScreen = ({ keyword, onKeywordChange, onKeywordSubmit }) => {
  return (
    <View style={styles.bar}>
      <Foundation style={styles.iconStyle} name="trees" size={30} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Your City"
        placeholderTextColor="green"
        selectionColor="blue"
        onChangeText={onKeywordChange}
        onEndEditing={onKeywordSubmit}
        value={keyword}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 15,
    marginBottom: 10,
    height: 50,
    backgroundColor: "#f0eeee",
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchScreen;
