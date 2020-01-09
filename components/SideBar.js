import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

export default Sidebar = props => (
  <ScrollView>
    <Image
      resizeMode="stretch"
      source={require("../assets/StarWarsAllBlack.jpg")}
      style={styles.logo}
    />
    <View styles={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
    alignSelf: "center",
    height: 50,
    width: 100
  }
});
