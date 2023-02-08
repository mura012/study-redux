import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
  id: number;
  title: string;
  isDone: boolean;
};
const initialState: TodoState[] = [
  { id: 1, title: "study", isDone: false },
  { id: 2, title: "run", isDone: false },
  { id: 3, title: "game", isDone: false },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      return [
        ...state,
        { id: state.length + 1, title: action.payload, isDone: false },
      ];
    },
    toggle: (state, action: PayloadAction<number>) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, toggle } = todoSlice.actions;

export default todoSlice.reducer;
