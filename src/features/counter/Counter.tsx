import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export function Counter() {
  // useSelectorでinitialStateの値を持ってくることができる
  // state.の後のcounterはsliceにつけたname
  const count = useSelector((state: RootState) => state.counter.value);
  //   更新用の関数を使用するためのもの
  const dispatch = useDispatch();
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          //   dispatch関数にcounter.actionsのactionを入れる
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        {/* inputで入力された値をincrementByAmountのpayloadに設定して実行 */}
        <button onClick={() => dispatch(incrementByAmount(value))}>追加</button>
      </div>
    </div>
  );
}
