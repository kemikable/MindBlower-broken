import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LifePanel() {
  return (
    <View style={lifePanel.container}>
      <View style={lifePanel.lifeBox}>
        <Text>Life</Text>
        <Text>Money</Text>
      </View>
    </View>
  );
}
const lifePanel = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    width: "100%",
    height: 60,
  },
  lifeBox: {
    flex: 0,
    flexDirection: "row",
    justifyContent: `space-evenly`,
    alignItems: `center`,
    width: `50%`,
    height: "50%",
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 100,
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.5,
    boxShadowRadius: 4,
    elevation: 6,
  },
});
