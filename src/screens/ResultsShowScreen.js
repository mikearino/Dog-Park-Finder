import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking
} from "react-native";
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";
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
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.nameStyle}>
          {result.name} - {result.rating} Stars
        </Text>

        <SafeAreaView style={styles.buttons}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${result.phone}`)}
          >
            <Entypo name="old-phone" size={30}></Entypo>
            <Text>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`${result.url}`)}>
            <FontAwesome name="yelp" size={30}></FontAwesome>
            <Text>Yelp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `maps://app?saddr=100+101&daddr=${result.coordinates.latitude}+${result.coordinates.longitude}`
              )
            }
          >
            <MaterialIcons name="directions" size={30}></MaterialIcons>
            <Text>Directions</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flex: 1
  },
  nameStyle: {
    fontWeight: "bold"
  },
  image: {
    height: 200,
    width: 290,
    borderRadius: 5,
    marginVertical: 11
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default ResultsShowScreen;
