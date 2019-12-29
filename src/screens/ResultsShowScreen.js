import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            `maps://app?saddr=100+101&daddr=${result.coordinates.latitude}+${result.coordinates.longitude}`
          )
        }
      >
        <Text>{result.location.display_address}</Text>
      </TouchableOpacity>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  nameStyle: {
    fontWeight: "bold"
  },
  image: {
    height: 200,
    width: 290,
    borderRadius: 5,
    marginVertical: 10
  }
});

export default ResultsShowScreen;
