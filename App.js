import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./img/bg.png")} // Замените путем на реальный путь к вашему изображению
        style={styles.imageBackground}
      >
        <Image
          source={require("./img/logomb.png")} // Замените путь на реальный путь к вашему изображению
          style={{ width: 200, height: 200 }} // Установите ширину и высоту изображения
        />
      </ImageBackground>
      <Text>FDFDFDFD</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
