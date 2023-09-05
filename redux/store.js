import { configureStore } from "@reduxjs/toolkit";
import nextQuestionSlice from "./nextQuestionSlice";
import wrongSlice from "./wrongSlice";
import endGameSlice from "./endGameSlice";
import questionCountSlice from "./questionCountSlice";

const store = configureStore({
  reducer: {
    next: nextQuestionSlice,
    wrong: wrongSlice,
    end: endGameSlice,
    count: questionCountSlice,
  },
});

export default store;
