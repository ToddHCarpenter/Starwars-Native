import React from "react";
import { TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const NavStack = props => {
  return (
    <TouchableOpacity
      style={{ alignItems: "flex-end", marginRight: 20, marginTop: 30 }}
      onPress={props.navButton.openDrawer}
    >
      <FontAwesome name="bars" size={24} color="#161924" />
    </TouchableOpacity>
  );
};

export default NavStack;
