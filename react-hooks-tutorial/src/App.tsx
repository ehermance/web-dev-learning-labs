import { useState, useRef, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { useForm } from "./hooks/useForm";
import { useMeasure } from "./hooks/useMeasure";
import { NumFact } from "./NumFact";
import "./App.css";

function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }
  console.log("Computing longest word");
  let longestWord = "";
  JSON.parse(arr).forEach((sentence) =>
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );
  return longestWord;
}

const App = () => {
  const { data } = useFetch("https://api.kanye.rest/quotes");
  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef(null);
  const hello = useRef(() => console.log("hello"));

  const [showNumFact, setShowNumFact] = useState(true);

  const [rect, inputRef2] = useMeasure([]);

  // useLayoutEffect(() => {
  //   console.log(
  //     inputRef.current !== null
  //       ? inputRef.current.getBoundingClientRect()
  //       : "No inputRef.current"
  //   );
  // }, []);

  return (
    <>
      <div>
        <div>
          Kanye.rest longest word: <q>{longestWord}</q>
        </div>
        <div>
          <button onClick={() => setShowNumFact(!showNumFact)}>
            Toggle Number Fact
          </button>
        </div>
        {showNumFact && <NumFact />}
        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />

        <pre>{JSON.stringify({ rect }, null, 2)}</pre>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            // inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </div>
    </>
  );
};

export default App;
