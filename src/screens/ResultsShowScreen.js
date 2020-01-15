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

        <SafeAreaView style={styles.buttonPositioning}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${result.phone}`)}
          >
            <Entypo
              style={{ paddingTop: 1 }}
              name="old-phone"
              size={42}
            ></Entypo>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.yelpButton}
            onPress={() => Linking.openURL(`${result.url}`)}
          >
            <FontAwesome name="yelp" size={36}></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `maps://app?saddr=My+Location&daddr=${result.coordinates.latitude}+${result.coordinates.longitude}`
              )
            }
          >
            <MaterialIcons name="directions" size={43}></MaterialIcons>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.textPostitioning}>
          <Text style={{ paddingLeft: 13 }}>Call</Text>
          <Text style={{ paddingLeft: 22 }}>Yelp</Text>
          <Text style={{ paddingRight: 15 }}>Directions</Text>
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
    paddingTop: 5,
    fontSize: 17,
    fontWeight: "bold"
  },
  image: {
    height: 200,
    width: 383,
    borderRadius: 5,
    marginVertical: 8
  },
  buttonPositioning: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 25,
    marginTop: 11
  },
  textPostitioning: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  yelpButton: {
    marginTop: 3
  }
});

export default ResultsShowScreen;
