import React, { useState } from "react";

import {
  ImageBackground,
  SafeAreaView,
  View,
  Modal,
  Text,
  Linking,
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

  const openModalQuestion = () => {
    setModalVisible(true);
  };

  const closeModalQuestion = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("./img/bg.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.box1}>
          <View style={styles.topBtnBox}>
            <TouchableWithoutFeedback onPress={menuOnPress}>
              <Image
                source={require("./img/menuBtn.png")}
                style={styles.menuImage}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={openModalQuestion}>
              <Image
                source={require("./img/questionBtn.png")}
                style={[
                  styles.questionImage,
                  { right: hiddenBtn },
                ]}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeModalQuestion}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text>Игра для мозговых штурмов! Mindblower - взрывная интеллектуальная развлекалка!</Text>
                  <TouchableWithoutFeedback onPress={closeModalQuestion}>

                    <Text style={styles.closeButton}>Закрыть</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </Modal>

            <TouchableWithoutFeedback onPress={menuOnPress}>
              <Image
                source={require("./img/settingsBtn.png")}
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
              source={require("./img/logomb.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.box3}>
          <View style={styles.startButton}>
            <Image
              source={require("./img/startBtn.png")}
              style={styles.startBtnIimage}
              resizeMode="contain"
            />
            <View style={styles.overlay}></View>
          </View>
        </View>
        <Text style={styles.text}>
          Created with honor by{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://github.com/kemikable')}
          >
            @kemikable
          </Text>{' '}
          and{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://github.com/adilek96')}
          >
            @adilek96
          </Text>
        </Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    textAlign: 'right',
    marginTop: 10
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Занимает всю доступную площадь
    backgroundColor: 'rgba(144, 238, 144, 0.3)', // Прозрачный  цвет
    borderRadius: 100, // Опционально, если нужно округлить задний фон
    zIndex: -1, // Отправляет элемент на задний план
    borderWidth: 1,
    borderColor: 'transparent', // Чтобы избежать граничных конфликтов
  },
  text: {
    textDecorationLine: "underline",
    color: "white",
    fontSize: 16,
    textAlign: 'left',
  },
  linkText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});

export default App;
