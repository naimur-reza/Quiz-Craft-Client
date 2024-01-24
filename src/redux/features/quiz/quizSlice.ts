import { createSlice } from "@reduxjs/toolkit";

interface IQuiz {
  module: string;
  question: string;
  description: string;
  options: [];
  correctOptions: [];
}

interface IInitialState {
  quiz: IQuiz[];
}

const initialState: IInitialState = {
  quiz: [],
};

const quizSlice = createSlice({
  name: "quiz",
  reducers: {},
  initialState,
});

export default quizSlice.reducer;
