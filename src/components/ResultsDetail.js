import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          result.image_url === ""
            ? require("../../assets/no-image-icon.jpg")
            : { uri: result.image_url }
        }
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.location.city}, {result.location.state} - {result.review_count}{" "}
        Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
