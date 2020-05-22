import React from "react";
import { useStore } from "../../utils/IoC";
import { CounterStore } from "./store";
import { observer } from "mobx-react";

function Counter() {
  const store = useStore(CounterStore);

  return (
    <div>
      <button onClick={store.decrement}>-</button>
      <span>{store.count}</span>
      <button onClick={store.increment}>+</button>
    </div>
  )
}

export default observer(Counter);
