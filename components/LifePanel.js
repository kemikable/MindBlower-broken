import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

export default function LifePanel() {
  const [winnings, setWinnings] = useState(0);
  const correct = useSelector((state) => state.correctCount.correct);

  useEffect(() => {
    if (correct > 1 && correct < 4) {
      setWinnings((prev) => prev + 100);
    } else if (correct === 5) {
      setWinnings((prev) => prev * 2);
    } else if (correct > 5 && correct < 9) {
      setWinnings((prev) => prev + 1000);
    } else if (correct === 10) {
      setWinnings((prev) => prev * 2);
    } else if (correct > 10 && correct < 15) {
      setWinnings((prev) => prev * 2);
    } else if (correct === 16) {
      setWinnings(1000000);
    }
  }, [correct]);

  return (
    <View style={lifePanel.container}>
      <View style={lifePanel.lifeBox}>
        <Text style={{ color: "red" }}>Выигрышь: {winnings}</Text>
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
