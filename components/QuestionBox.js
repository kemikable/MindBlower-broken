import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNextQuestion } from "../redux/nextQuestionSlice";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function QuestionBox() {
  const [question, setQuestion] = useState(""); // сюда записывается вопрос
  // const [questionId, setQuestionId] = useState();
  const [userAnswer, setUserAnswer] = useState(false); // индикатор верного ответа
  const [isTouchableEnabled, setIsTouchableEnabled] = useState(true); // нужен для отключения TouchableWithoutFeedback
  const [aAnswerIsCheck, setAAnswerIsCheck] = useState(false);
  const [bAnswerIsCheck, setBAnswerIsCheck] = useState(false);
  const [cAnswerIsCheck, setCAnswerIsCheck] = useState(false);
  const [dAnswerIsCheck, setDAnswerIsCheck] = useState(false);
  const [correct, setCorrect] = useState(1);
  console.log(correct);
  // глобальный стейт
  const nextQuestion = useSelector((state) => state.next.nextQuestion);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://md-server-nine.vercel.app/questions/easy/${nextQuestion}`)
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
      })
      .catch(function (error) {});
  }, [nextQuestion]);

  const checkTrueAnswer = (selectedAnswer) => {
    setIsTouchableEnabled(false);
    switch (selectedAnswer) {
      case "A":
        setAAnswerIsCheck(true);
        break;
      case "B":
        setBAnswerIsCheck(true);
        break;
      case "C":
        setCAnswerIsCheck(true);
        break;
      case "D":
        setDAnswerIsCheck(true);
        break;
    }
    if (selectedAnswer === question.trueAnswer) {
      setUserAnswer(true);
      setCorrect((prev) => prev + 1);
      dispatch(setNextQuestion(question.id));
    } else {
      setUserAnswer(false);
    }
  };

  const answerStyle = {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `60%`,
    height: 50,

    borderWidth: 1,
    borderColor: userAnswer ? "green" : "red",
    borderRadius: 100,
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.5,
    boxShadowRadius: 4,
    elevation: 6,
  };
  if (!question) {
    return <Text style={{ color: "yellow" }}>Loading...</Text>; // Пока данные загружаются, отображаем "Loading..."
  }
  return (
    <View style={questionBoxStyles.questionBox}>
      <View style={questionBoxStyles.title}>
        <Text style={{ color: "pink" }}>{question.title}</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("A")}
        disabled={!isTouchableEnabled}
      >
        <View style={!aAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={{ color: "yellow" }}>{question.answers.A}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("B")}
        disabled={!isTouchableEnabled}
      >
        <View style={!bAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={{ color: "yellow" }}>{question.answers.B}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("C")}
        disabled={!isTouchableEnabled}
      >
        <View style={!cAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={{ color: "yellow" }}>{question.answers.C}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("D")}
        disabled={!isTouchableEnabled}
      >
        <View style={!dAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={{ color: "yellow" }}>{question.answers.D}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const questionBoxStyles = StyleSheet.create({
  title: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `90%`,
    height: 80,

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
  answers: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `60%`,
    height: 50,
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
  questionBox: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `space-around`,
    alignItems: "center",
    width: `100%`,
    height: `50%`,
  },
});
