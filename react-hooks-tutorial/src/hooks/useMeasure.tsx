import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef(null);

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, myRef];
};
