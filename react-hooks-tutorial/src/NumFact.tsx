import { useState, useEffect, useCallback } from "react";
// import { useCountRenders } from "./hooks/useCountRenders";
import { useFetch } from "./hooks/useFetch";
import { useMeasure } from "./hooks/useMeasure";

export const NumFact = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() => {
    const initialCount = localStorage.getItem("count");
    return initialCount === null ? 0 : JSON.parse(initialCount);
  });

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data || loading ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify({ rect }, null, 2)}</pre>
      <div>
        count:
        {/* <button onClick={() => setCount((c) => c - 1)}>-</button> */}
        {count}
        <button onClick={() => increment(1)}>+</button>
      </div>
    </div>
  );
};
