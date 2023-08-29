import { configureStore } from "@reduxjs/toolkit";
import nextQuestionSlice from "./nextQuestionSlice";

const store = configureStore({
  reducer: {
    next: nextQuestionSlice,
  },
});

export default store;
