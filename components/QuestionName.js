import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function QuestionName() {
  return (
    <View style={questionNameStyles.container}>
      <View style={questionNameStyles.questionBox}>
        <Text style={questionNameStyles.text}>QuestionName</Text>
      </View>
    </View>
  );
}
const questionNameStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    width: "100%",
    height: 60,
  },
  questionBox: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `60%`,

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
  text: {
    color: "green",
    fontSize: 28,
  },
});
