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
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({

        mtMedium: require(".//fonts/Montserrat-Medium.ttf"),
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
              visible={modalVisible}
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


export default App;
