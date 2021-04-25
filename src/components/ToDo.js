import { useState } from "react";

const ToDo = () => {
  const init = () => {
    let initialState = [{ message: "Test" }];
    return initialState;
  };
  const [state, setState] = useState(init);
  const [input, setInput] = useState("");
  console.log(state);

  const getInput = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    setInput(value);
  };

  const addItems = () => {
    setState((state) => {
      return [...state, { message: input }];
    });

    setInput("");
  };

  const delteToDo = (e) => {
    let id = parseInt(e.target.id);
    console.log(typeof id, id);

    let data = state.filter((elem, index) => {
      console.log(index);
      return index !== id;
    });
    console.log("data", data);
    setState(data);
  };

  return (
    <>
      <h1>React ToDo App</h1>

      <input
        type="text"
        value={input}
        name="msgInput"
        id=""
        onChange={getInput}
      />
      <button onClick={addItems}>Add</button>
      {state.map((elem, index) => {
        return (
          <h1 key={index}>
            {elem.message}
            <button id={index} onClick={delteToDo}>
              Done
            </button>
          </h1>
        );
      })}
    </>
  );
};

export default ToDo;
