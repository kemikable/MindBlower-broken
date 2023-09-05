import React, { useEffect, useState } from "react";
import { styles } from "../styles";
// import Timer from "../components/Timer";
import QuestionName from "../components/QuestionName";
import LifePanel from "../components/LifePanel";
import QuestionBox from "../components/QuestionBox";
import CluePanel from "../components/CluePanel";
import { ImageBackground, SafeAreaView, View, Text } from "react-native";

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
      source={require("../img/mainBgAnimate.webp")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.widgetsBox}>
          <LifePanel />
          {/* <Timer /> */}
          <QuestionName />
        </View>

        <QuestionBox />

        <View style={styles.buttonBox}>
          <CluePanel />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default QuestionScreen;
