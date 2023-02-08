import { RootState } from "@/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, addTodo } from "./todoSlice";

export const Todo = () => {
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <h1>{`現在のタスク${todo.length}`}</h1>
      <div>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <label>
                <span>{item.title}</span>
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => dispatch(toggle(item.id))}
                />
              </label>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(value))}>追加</button>
    </div>
  );
};
