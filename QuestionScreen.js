import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Timer from "./Timer";
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
} from "react-native";

const QuestionScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("./img/mainBgAnimate.gif")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.widgetsBox}>
          <Timer />
        </View>
        <View style={styles.questionBox}></View>
        <View style={styles.buttonBox}></View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default QuestionScreen;
