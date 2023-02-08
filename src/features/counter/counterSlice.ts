import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};
// 初期値
const initialState: CounterState = {
  value: 0,
};
// ReducerとActionをまとめたもの
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
// reducersで設定した名前に応じて自動的にactionが作られる
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
