import React, { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const defaultCount = () => {
    const storedData = JSON.parse(localStorage.getItem("count"));
    return storedData ? storedData : 0;
  };
  const [count, setCount] = useState(defaultCount);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <q>{!data ? "loading..." : data}</q>
      <div>
        count:
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        {count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>

      <div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default App;
