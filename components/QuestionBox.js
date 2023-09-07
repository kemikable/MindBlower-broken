// import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { setNextQuestion } from "../redux/nextQuestionSlice";
// import { setQuestionCount } from "../redux/questionCountSlice";
// import { setWrongAnswer, setWrongAnswerDiscription } from "../redux/wrongSlice";
// import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
// import WrongAnswerModal from "./WrongAnswerModal";
// import GameEnddingModal from "./GameEnddingModal";

// export default function QuestionBox() {
//   const [question, setQuestion] = useState(""); // сюда записывается вопрос
//   // const [questionId, setQuestionId] = useState();
//   const [userAnswer, setUserAnswer] = useState(false); // индикатор верного ответа
//   const [isTouchableEnabled, setIsTouchableEnabled] = useState(true); // нужен для отключения TouchableWithoutFeedback
//   const [aAnswerIsCheck, setAAnswerIsCheck] = useState(false);
//   const [bAnswerIsCheck, setBAnswerIsCheck] = useState(false);
//   const [cAnswerIsCheck, setCAnswerIsCheck] = useState(false);
//   const [dAnswerIsCheck, setDAnswerIsCheck] = useState(false);
//   const [easyQuestionsCount, setEasyQuestionsCount] = useState();
//   const [mediumQuestionsCount, setMediumQuestionsCount] = useState();
//   const [hardQuestionsCount, setHardQuestionsCount] = useState();
//   const [correct, setCorrect] = useState(1);
//   // глобальный стейт
//   const nextQuestion = useSelector((state) => state.next.nextQuestion);
//   const questionCount = useSelector((state) => state.count.questionCount);
//   // const wrongAnswer = useSelector((state) => state.wrong.wrongAnswer);
//   const dispatch = useDispatch();

//   ///-------------------------------- функции получения id вопросов из async storage --------
//   const getEasyData = async () => {
//     try {
//       const value = await AsyncStorage.getItem("easyId");
//       if (value !== null) {
//         const count = JSON.parse(value);

//         setEasyQuestionsCount(count);
//       } else setEasyQuestionsCount(1);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   //---------------------------------
//   const getMediumData = async () => {
//     try {
//       const value = await AsyncStorage.getItem("mediumId");
//       if (value !== null) {
//         const count = JSON.parse(value);

//         setMediumQuestionsCount(count);
//       } else setMediumQuestionsCount(1);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   //---------------------------------
//   const getHardData = async () => {
//     try {
//       const value = await AsyncStorage.getItem("hardId");
//       if (value !== null) {
//         const count = JSON.parse(value);

//         setHardQuestionsCount(count);
//       } else setHardQuestionsCount(1);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     if (correct <= 5) {
//       getEasyData();
//     } else if (correct > 5 && correct <= 10) {
//       getMediumData();
//     } else if (correct > 10 && correct <= 15) {
//       getHardData();
//     }
//   }, [nextQuestion]);
//   ///---------------------- получение вопросов по уровню сложности -----------------
//   //-------------------------------- легкие ----------------------------------------
//   const getEasyQuestions = () => {
//     axios
//       .get(
//         `https://md-server-nine.vercel.app/questions/easy/${easyQuestionsCount}`
//       )
//       .then(function (response) {
//         setQuestion(response.data);
//         setIsTouchableEnabled(true);
//         setDAnswerIsCheck(false);
//         setCAnswerIsCheck(false);
//         setBAnswerIsCheck(false);
//         setAAnswerIsCheck(false);
//         setUserAnswer(false);
//       })
//       .catch(function (error) { });
//   };
//   //-------------------------------- средние ----------------------------------------
//   const getMediumQuestions = () => {
//     axios
//       .get(
//         `https://md-server-nine.vercel.app/questions/medium/${mediumQuestionsCount}`
//       )
//       .then(function (response) {
//         setQuestion(response.data);
//         setIsTouchableEnabled(true);
//         setDAnswerIsCheck(false);
//         setCAnswerIsCheck(false);
//         setBAnswerIsCheck(false);
//         setAAnswerIsCheck(false);
//         setUserAnswer(false);
//       })
//       .catch(function (error) { });
//   };
//   //-------------------------------- сложные ----------------------------------------
//   const getHardQuestions = () => {
//     axios
//       .get(
//         `https://md-server-nine.vercel.app/questions/hard/${hardQuestionsCount}`
//       )
//       .then(function (response) {
//         setQuestion(response.data);
//         setIsTouchableEnabled(true);
//         setDAnswerIsCheck(false);
//         setCAnswerIsCheck(false);
//         setBAnswerIsCheck(false);
//         setAAnswerIsCheck(false);
//         setUserAnswer(false);
//       })
//       .catch(function (error) { });
//   };
//   // -------------------------------------
//   useEffect(() => {
//     if (correct <= 5) {
//       getEasyQuestions();
//     } else if (correct > 5 && correct <= 10) {
//       getMediumQuestions();
//     } else if (correct > 10 && correct <= 15) {
//       getHardQuestions();
//     }

//     // getEasyQuestions();
//   }, [easyQuestionsCount, mediumQuestionsCount, hardQuestionsCount]);

//   //------------------------------- функции сохранения в локал сторедж ------------
//   const saveEasyInStorage = async () => {
//     try {
//       await AsyncStorage.setItem("easyId", JSON.stringify(question.id + 1));
//       console.log("Data saved successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const saveMediumInStorage = async () => {
//     try {
//       await AsyncStorage.setItem("mediumId", JSON.stringify(question.id + 1));
//       console.log("Data saved successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const saveHardInStorage = async () => {
//     try {
//       await AsyncStorage.setItem("hardId", JSON.stringify(question.id + 1));
//       console.log("Data saved successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const checkTrueAnswer = (selectedAnswer) => {
//     setIsTouchableEnabled(false);
//     switch (selectedAnswer) {
//       case "A":
//         setAAnswerIsCheck(true);
//         break;
//       case "B":
//         setBAnswerIsCheck(true);
//         break;
//       case "C":
//         setCAnswerIsCheck(true);
//         break;
//       case "D":
//         setDAnswerIsCheck(true);
//         break;
//     }
//     if (selectedAnswer === question.trueAnswer) {
//       setUserAnswer(true);
//       setCorrect((prev) => prev + 1);
//       dispatch(setNextQuestion(question.id));
//       dispatch(setQuestionCount(questionCount + 1));

//       if (correct <= 5) {
//         saveEasyInStorage();
//       }
//       if (correct > 5 && correct <= 10) {
//         saveMediumInStorage();
//       }
//       if (correct > 10 && correct <= 15) {
//         saveHardInStorage();
//       }
//     } else {
//       setUserAnswer(false);
//       dispatch(setWrongAnswer(true));
//       dispatch(setWrongAnswerDiscription(question.description));
//       if (correct <= 5) {
//         saveEasyInStorage();
//       }
//       if (correct > 5 && correct <= 10) {
//         saveMediumInStorage();
//       }
//       if (correct > 10 && correct <= 15) {
//         saveHardInStorage();
//       }
//     }
//   };

//   const answerStyle = {
//     flex: 0,
//     justifyContent: `center`,
//     alignItems: `center`,
//     width: `60%`,
//     height: 50,

//     borderWidth: 1,
//     borderColor: userAnswer ? "green" : "red",
//     borderRadius: 100,
//     boxShadowColor: "black",
//     boxShadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     boxShadowOpacity: 0.5,
//     boxShadowRadius: 4,
//     elevation: 6,
//   };
//   if (!question) {
//     return <Text style={{ color: "yellow" }}>Loading...</Text>; // Пока данные загружаются, отображаем "Loading..."
//   }
//   return (
//     <View style={questionBoxStyles.questionBox}>
//       <View style={questionBoxStyles.title}>
//         <Text style={{ color: "pink" }}>{question.title}</Text>
//       </View>

//       <TouchableWithoutFeedback
//         onPress={() => checkTrueAnswer("A")}
//         disabled={!isTouchableEnabled}
//       >
//         <View style={!aAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
//           <Text style={{ color: "yellow" }}>{question.answers.A}</Text>
//         </View>
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback
//         onPress={() => checkTrueAnswer("B")}
//         disabled={!isTouchableEnabled}
//       >
//         <View style={!bAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
//           <Text style={{ color: "yellow" }}>{question.answers.B}</Text>
//         </View>
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback
//         onPress={() => checkTrueAnswer("C")}
//         disabled={!isTouchableEnabled}
//       >
//         <View style={!cAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
//           <Text style={{ color: "yellow" }}>{question.answers.C}</Text>
//         </View>
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback
//         onPress={() => checkTrueAnswer("D")}
//         disabled={!isTouchableEnabled}
//       >
//         <View style={!dAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
//           <Text style={{ color: "yellow" }}>{question.answers.D}</Text>
//         </View>
//       </TouchableWithoutFeedback>
//       <WrongAnswerModal />
//       <GameEnddingModal />
//     </View>
//   );
// }
// const questionBoxStyles = StyleSheet.create({
//   title: {
//     flex: 0,
//     justifyContent: `center`,
//     alignItems: `center`,
//     width: `95%`,
//     height: 80,
//     padding: 10,

//     borderWidth: 1,
//     borderColor: "yellow",
//     borderRadius: 100,
//     boxShadowColor: "black",
//     boxShadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     boxShadowOpacity: 0.5,
//     boxShadowRadius: 4,
//     elevation: 6,
//   },
//   answers: {
//     flex: 0,
//     justifyContent: `center`,
//     alignItems: `center`,
//     width: `60%`,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "yellow",
//     borderRadius: 100,
//     boxShadowColor: "black",
//     boxShadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     boxShadowOpacity: 0.5,
//     boxShadowRadius: 4,
//     elevation: 6,
//   },
//   questionBox: {
//     flex: 1,
//     flexDirection: `column`,
//     justifyContent: `space-around`,
//     alignItems: "center",
//     width: `100%`,
//     height: `50%`,
//   },
// });


import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNextQuestion } from "../redux/nextQuestionSlice";
import { setQuestionCount } from "../redux/questionCountSlice";
import { setWrongAnswer, setWrongAnswerDiscription } from "../redux/wrongSlice";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import WrongAnswerModal from "./WrongAnswerModal";
import GameEnddingModal from "./GameEnddingModal";
import { setIsAi } from "../redux/aiHelperSlice";

export default function QuestionBox() {
  const [question, setQuestion] = useState(""); // сюда записывается вопрос
  // const [questionId, setQuestionId] = useState();
  const [userAnswer, setUserAnswer] = useState(false); // индикатор верного ответа
  const [isTouchableEnabled, setIsTouchableEnabled] = useState(true); // нужен для отключения TouchableWithoutFeedback
  const [aAnswerIsCheck, setAAnswerIsCheck] = useState(false);
  const [bAnswerIsCheck, setBAnswerIsCheck] = useState(false);
  const [cAnswerIsCheck, setCAnswerIsCheck] = useState(false);
  const [dAnswerIsCheck, setDAnswerIsCheck] = useState(false);

  const [easyQuestionsCount, setEasyQuestionsCount] = useState();
  const [mediumQuestionsCount, setMediumQuestionsCount] = useState();
  const [hardQuestionsCount, setHardQuestionsCount] = useState();
  // const [modalMessage, setModalMessage] = useState("");

  const [correct, setCorrect] = useState(1);
  // глобальный стейт
  const nextQuestion = useSelector((state) => state.next.nextQuestion);
  const questionCount = useSelector((state) => state.count.questionCount);
  // const wrongAnswer = useSelector((state) => state.wrong.wrongAnswer);
  const dispatch = useDispatch();

  ///-------------------------------- функции получения id вопросов из async storage --------
  const getEasyData = async () => {
    try {
      const value = await AsyncStorage.getItem("easyId");
      if (value !== null) {
        const count = JSON.parse(value);

        setEasyQuestionsCount(count);
      } else setEasyQuestionsCount(1);
    } catch (error) {
      console.error(error);
    }
  };
  //---------------------------------
  const getMediumData = async () => {
    try {
      const value = await AsyncStorage.getItem("mediumId");
      if (value !== null) {
        const count = JSON.parse(value);

        setMediumQuestionsCount(count);
      } else setMediumQuestionsCount(1);
    } catch (error) {
      console.error(error);
    }
  };
  //---------------------------------
  const getHardData = async () => {
    try {
      const value = await AsyncStorage.getItem("hardId");
      if (value !== null) {
        const count = JSON.parse(value);

        setHardQuestionsCount(count);
      } else setHardQuestionsCount(1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (correct <= 5) {
      getEasyData();
    } else if (correct > 5 && correct <= 10) {
      getMediumData();
    } else if (correct > 10 && correct <= 15) {
      getHardData();
    }
  }, [nextQuestion]);
  ///---------------------- получение вопросов по уровню сложности -----------------
  //-------------------------------- легкие ----------------------------------------
  const getEasyQuestions = () => {
    axios
      .get(
        `https://md-server-nine.vercel.app/questions/easy/${easyQuestionsCount}`
      )
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
        dispatch(setIsAi(`А ответом на данный вопрос является: ${response.data.trueAnswer}`));
      })
      .catch(function (error) { });
  };
  //-------------------------------- средние ----------------------------------------
  const getMediumQuestions = () => {
    axios
      .get(
        `https://md-server-nine.vercel.app/questions/medium/${mediumQuestionsCount}`
      )
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
        dispatch(setIsAi(`А ответом на данный вопрос является: ${response.data.trueAnswer}`));
      })
      .catch(function (error) { });
  };
  //-------------------------------- сложные ----------------------------------------
  const getHardQuestions = () => {
    axios
      .get(
        `https://md-server-nine.vercel.app/questions/hard/${hardQuestionsCount}`
      )
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
        dispatch(setIsAi(`А ответом на данный вопрос является: ${response.data.trueAnswer}`));
      })
      .catch(function (error) { });
  };
  // -------------------------------------
  useEffect(() => {
    if (correct <= 5) {
      getEasyQuestions();
    } else if (correct > 5 && correct <= 10) {
      getMediumQuestions();
    } else if (correct > 10 && correct <= 15) {
      getHardQuestions();
    }

    // getEasyQuestions();
  }, [easyQuestionsCount, mediumQuestionsCount, hardQuestionsCount]);

  //------------------------------- функции сохранения в локал сторедж ------------
  const saveEasyInStorage = async () => {
    try {
      await AsyncStorage.setItem("easyId", JSON.stringify(question.id + 1));
      console.log("Data saved successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const saveMediumInStorage = async () => {
    try {
      await AsyncStorage.setItem("mediumId", JSON.stringify(question.id + 1));
      console.log("Data saved successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const saveHardInStorage = async () => {
    try {
      await AsyncStorage.setItem("hardId", JSON.stringify(question.id + 1));
      console.log("Data saved successfully");
    } catch (error) {
      console.error(error);
    }
  };
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
      dispatch(setQuestionCount(questionCount + 1));

      if (correct <= 5) {
        saveEasyInStorage();
      }
      if (correct > 5 && correct <= 10) {
        saveMediumInStorage();
      }
      if (correct > 10 && correct <= 15) {
        saveHardInStorage();
      }
    } else {
      setUserAnswer(false);
      dispatch(setWrongAnswer(true));
      dispatch(setWrongAnswerDiscription(question.description));
      if (correct <= 5) {
        saveEasyInStorage();
      }
      if (correct > 5 && correct <= 10) {
        saveMediumInStorage();
      }
      if (correct > 10 && correct <= 15) {
        saveHardInStorage();
      }
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
      <WrongAnswerModal />
      <GameEnddingModal />
    </View>
  );
}
const questionBoxStyles = StyleSheet.create({
  title: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `95%`,
    height: 80,
    padding: 10,

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
