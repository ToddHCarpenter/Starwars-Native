import React, { useState, useEffect } from "react";
import { CardList } from "react-native-card-list";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import NavStack from "../components/NavStack";

import axios from "axios";

const Characters = props => {
  const [getFilms, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://swapi.co/api/films");
      setFilms(res.data.results);
    };

    fetchData();
  }, []);

  const cards = getFilms.map(films => ({
    id: films.episode_id,
    title: films.title,

    content: <Text>{films.opening_crawl}</Text>
  }));

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavStack navButton={props.navigation} />
        <View>
          <CardList cards={cards} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
