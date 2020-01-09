import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Feather } from "@expo/vector-icons";

import { FilmsScreen, CharacterScreen, ScreenScreen } from "./screens";

import Sidebar from "./components/SideBar";

const DrawerNavigator = createDrawerNavigator(
  {
    FilmsScreen: {
      screen: FilmsScreen,
      navigationOptions: {
        title: "Films",
        drawerIcon: ({ tintColor }) => (
          <Feather name="film" size={16} color={tintColor} />
        )
      }
    },

    CharacterScreen: {
      screen: CharacterScreen,
      navigationOptions: {
        title: "Characters",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        )
      }
    },

    ScreenScreen: {
      screen: ScreenScreen,
      navigationOptions: {
        title: "Screen",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        )
      }
    }
  },

  {
    contentComponent: props => <Sidebar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.7
  }
);

export default createAppContainer(DrawerNavigator);
