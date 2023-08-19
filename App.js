import React, { useState } from "react";

import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

const App = () => {
  const [hiddenBtn, setHiddenBtn] = useState(-400);
  const [modalVisible, setModalVisible] = useState(false);
  const menuOnPress = () => {
    if (hiddenBtn === 0) {
      setHiddenBtn(-100);
    } else {
      setHiddenBtn(0);
    }
  };

  return (
    <ImageBackground
      source={require("./img/bg.png")} // Замените путь на реальный путь к вашему изображению
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.box1}>
          <View style={styles.topBtnBox}>
            <TouchableWithoutFeedback onPress={menuOnPress}>
              <Image
                source={require("./img/menuBtn.png")} // Замените путем на реальный путь к вашему изображению
                style={styles.menuImage}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={menuOnPress}>
              <Image
                source={require("./img/questionBtn.png")} // Замените путем на реальный путь к вашему изображению
                style={[
                  styles.questionImage,
                  { right: hiddenBtn }, // Используем hiddenBtn в стиле
                ]}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={menuOnPress}>
              <Image
                source={require("./img/settingsBtn.png")} // Замените путем на реальный путь к вашему изображению
                style={[
                  styles.settingsImage,
                  { right: hiddenBtn }, // Используем hiddenBtn в стиле
                ]}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.logoContainer}>
            <Image
              source={require("./img/logomb.png")} // Замените путем на реальный путь к вашему изображению
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.box3}>
          <View style={styles.startButton}>
            <Image
              source={require("./img/startBtn.png")} // Замените путем на реальный путь к вашему изображению
              style={styles.startBtnIimage}
              resizeMode="contain"
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box1: {
    flex: 0,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    alignItems: "flex-end",
    width: `100%`,
    height: `20%`,
  },
  box2: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: "center",
    width: `100%`,
    height: `50%`,
  },
  box3: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: "center",
    width: `100%`,
    height: `30%`,
  },
  logoContainer: {
    alignItems: "center",
    width: `90%`,
    height: `30%`,
  },
  logoImage: {
    width: `100%`,
    height: `100%`,
  },
  startButton: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `50%`,
    height: `20%`,
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  startBtnIimage: {
    width: `70%`,
    height: `60%`,
  },
  backgroundImage: {
    flex: 1,
  },
  topBtnBox: {
    flex: 0,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    width: 50,
    height: `95%`,
    marginRight: 15,
  },
  menuImage: {
    width: 50,
    height: 50,
    opacity: 0.8,
  },
  questionImage: {
    opacity: 0.8,
    width: 50,
    height: 50,
  },
  settingsImage: {
    opacity: 0.8,
    width: 50,
    height: 50,
  },
});

export default App;
