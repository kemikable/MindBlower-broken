import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { styles } from "./styles";
// import * as Font from "expo-font";
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


  // Для первого модального окна
  const [modalQuestionVisible, setModalQuestionVisible] = useState(false);

  // Для второго модального окна
  const [modalSettingsVisible, setModalSettingsVisible] = useState(false);

  const menuOnPress = () => {
    if (hiddenBtn === 0) {
      setHiddenBtn(-100);
    } else {
      setHiddenBtn(0);
    }
  };

  const openModalQuestion = () => {
    setModalQuestionVisible(true);
  };

  const closeModalQuestion = () => {
    setModalQuestionVisible(false);
  };

  const openModalSettings = () => {
    setModalSettingsVisible(true);
  };

  const closeModalSettings = () => {
    setModalSettingsVisible(false);
  };


  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        mtLight: require(".//fonts/Montserrat-Light.ttf"),
        mtMedium: require(".//fonts/Montserrat-Medium.ttf"),
        mtBold: require(".//fonts/Montserrat-Bold.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    // Пока шрифт не загружен, можно отобразить загрузочный экран
    return null;
  }
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
              visible={modalQuestionVisible}
              onRequestClose={closeModalQuestion}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={{ fontFamily: "mtMedium", fontSize: 22 }}>Игра для мозговых штурмов! Mindblower - взрывная интеллектуальная развлекалка!</Text>
                  <TouchableWithoutFeedback onPress={closeModalQuestion}>

                    <Text style={styles.closeButton}>Закрыть</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </Modal>

            <TouchableWithoutFeedback onPress={openModalSettings}>
              <Image
                source={require("./img/settingsBtn.png")}
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
              visible={modalSettingsVisible}
              onRequestClose={closeModalSettings}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalContent}>
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
                  <TouchableWithoutFeedback onPress={closeModalSettings}>

                    <Text style={styles.closeButton}>Закрыть</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </Modal>

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

      </SafeAreaView>
    </ImageBackground>
  );
};


export default App;
