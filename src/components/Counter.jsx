import { useState } from "preact/hooks";
export const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const increment = () => setCounter(Counter + 1);
  const decrement = () => setCounter(Counter - 1);
  return (
    <>
      <h1 class="text-green-500 text-6xl p-2">{Counter}</h1>
      <button
        onClick={increment}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        + Increment
      </button>
      <button
        onClick={decrement}
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        - Decrement
      </button>
    </>
  );
};
