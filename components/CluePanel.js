import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function CluePanel() {
  return (
    <View style={cluePanelStyle.panel}>
      <TouchableWithoutFeedback>
        <Image
          style={cluePanelStyle.img}
          source={require("../img/changeQuestion.png")}
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Image style={cluePanelStyle.img} source={require("../img/clue.png")} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Image
          style={cluePanelStyle.img}
          source={require("../img/helpAI.png")}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
const cluePanelStyle = StyleSheet.create({
  panel: {
    flex: 0,
    flexDirection: "row",
    justifyContent: `space-evenly`,
    alignItems: `center`,
    width: `100%`,
    height: 80,

    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "rgba(255, 255, 0, 0.5)",
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 1,
    elevation: 50,
  },
  img: {
    width: 50,
    height: 50,
  },
});
