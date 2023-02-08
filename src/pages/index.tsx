import { Counter } from "@/features/counter/Counter";
import { Todo } from "@/features/todo/Todo";

export default function Home() {
  return (
    <>
      <Counter />
      <Todo />
    </>
  );
}
