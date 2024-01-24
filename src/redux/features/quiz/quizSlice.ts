import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    addQuiz: (state, { payload }: PayloadAction<IQuiz>) => {
      state.quiz.push(payload);
    },
  },
  initialState,
});

// this is for using different places
export const { addQuiz } = quizSlice.actions;

// this is for connecting with the store
export default quizSlice.reducer;
