import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const Hello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() => {
    const initialCount = localStorage.getItem("count");
    return initialCount === null ? 0 : JSON.parse(initialCount);
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders: ", renders.current++);

  return (
    <div>
      <>
        <div>{!data || loading ? "loading..." : data}</div>
        <div>
          count:
          <button onClick={() => setCount((c) => c - 1)}>-</button>
          {count}
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </>
    </div>
  );
};
