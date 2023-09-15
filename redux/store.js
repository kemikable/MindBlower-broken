import { configureStore } from "@reduxjs/toolkit";
import nextQuestionSlice from "./nextQuestionSlice";
import wrongSlice from "./wrongSlice";
import endGameSlice from "./endGameSlice";
import questionCountSlice from "./questionCountSlice";
import aiHelperSlice from "./aiHelperSlice";
import clueHelperSlice from "./clueHelperSlice";
import nextQuestionHelpSlice from "./nextQuestionHelpSlice";

const store = configureStore({
  reducer: {
    next: nextQuestionSlice,
    wrong: wrongSlice,
    end: endGameSlice,
    count: questionCountSlice,
    ai: aiHelperSlice,
    clue: clueHelperSlice,
    nextQ: nextQuestionHelpSlice
  },
});

export default store;
