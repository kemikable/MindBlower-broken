import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Button,
  Alert,
  View,
  Text
} from "react-native";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground

        source={require("./img/bg.png")} // Замените путем на реальный путь к вашему изображению
        style={styles.imageBackground}
      >

        <View style={styles.buttonRight}>
          {/* <Button title=" More" onPress={() => Alert.alert("Pressed")} /> */}
        </View>

        <View style={styles.buttonLeft}>
          {/* <Button title=" More" onPress={() => Alert.alert("Pressed")} /> */}
        </View>
        <Image
          source={require("./img/logomb.png")} // Замените путь на реальный путь к вашему изображению
          style={{ width: 350, height: 200, bottom: 270 }} // Установите ширину и высоту изображения
        />
        <View style={styles.buttonStart}>
          <Text style={styles.textStart}>Start</Text>
          {/* <Button title=" More" onPress={() => Alert.alert("Pressed")} /> */}
        </View>
      </ImageBackground>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonRight: {
    width: 40,
    height: 40,
    bottom: 240,
    left: 145,
    backgroundColor: "grey",
    borderRadius: 50
  },
  buttonLeft: {
    width: 40,
    height: 40,
    bottom: 285,
    right: 145,
    backgroundColor: "grey",
    borderRadius: 50
  },
  buttonStart: {
    flex: 1,
    justifyContent: "center",

    width: 270,
    height: 70,

    backgroundColor: "grey",
    borderRadius: 50
  },
  textStart: {
    textAlign: "center",
  }
  container: {
    flex: 1,
  },
  text: {
    color: "yellow",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover", // Изменяйте в зависимости от вашего предпочтения (cover, contain, stretch и др.)
    justifyContent: "center", // Выравнивание по центру по вертикали
    alignItems: "center", // Выравнивание по центру по горизонтали
  },
});
