import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import NavStack from "../components/NavStack";

const Screens = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavStack navButton={props.navigation} />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.text}>{props.name}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Screens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500"
  }
});
