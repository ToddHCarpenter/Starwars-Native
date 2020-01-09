import React from "react";
import Screen from "./Screen";
import Films from "./Films";
import NavStack from "../components/SideBar";
import Characters from "./Characters";

export const FilmsScreen = ({ navigation }) => (
  <Films navigation={navigation} />
);
export const ScreenScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Characters" />
);
export const CharacterScreen = ({ navigation }) => (
  <Characters navigation={navigation} />
);
