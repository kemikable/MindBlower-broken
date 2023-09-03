import React from "react";
import { useNavigation } from "@react-navigation/native";
import { setIsEnd } from "../redux/endGameSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";

export default function GameEnddingModal() {
  const isEnd = useSelector((state) => state.end.isEnd);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const gameEndHandler = () => {
    dispatch(setIsEnd(false));
    navigation.navigate("MainScreen");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isEnd}
      onRequestClose={false}
    >
      <View style={endStyles.modalContainer}>
        <View style={endStyles.modalContent}>
          <View style={endStyles.topBox}>
            <Image
              source={require("../img/resultTitleRus.png")}
              style={endStyles.btnIimage}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontFamily: "mtMedium",
              fontSize: 22,
            }}
          >
            Поздравляем ваш выигрышь 'тут будет подсчет очков'!
          </Text>
          <View style={endStyles.box}>
            <TouchableWithoutFeedback onPress={gameEndHandler}>
              <View style={endStyles.endButton}>
                <Image
                  source={require("../img/endGameRus.png")}
                  style={endStyles.btnIimage}
                  resizeMode="contain"
                />
                <View style={endStyles.overlay}></View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const endStyles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    alignItems: "center",
    width: `100%`,
    height: "20%",
  },
  topBox: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: "center",
    width: `100%`,
    height: "20%",
  },
  endButton: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `50%`,
    height: "30%",
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
  btnIimage: {
    width: `70%`,
    height: `60%`,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Занимает всю доступную площадь
    backgroundColor: "rgba(144, 238, 144, 0.3)", // Прозрачный  цвет
    borderRadius: 100, // Опционально, если нужно округлить задний фон
    zIndex: -1, // Отправляет элемент на задний план
    borderWidth: 1,
    borderColor: "transparent", // Чтобы избежать граничных конфликтов
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "60%",
  },
});
