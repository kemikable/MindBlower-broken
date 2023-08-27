import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Modal,
  Text,
  Linking,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  StyleSheet,
} from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds]);

  const secondsStyle = {
    color: seconds < 15 ? "red" : "green",
    fontSize: 34,
  };

  return (
    <View style={timerStyles.container}>
      <Text style={secondsStyle}>{seconds}</Text>
    </View>
  );
};

const timerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
  },
});
export default Timer;
