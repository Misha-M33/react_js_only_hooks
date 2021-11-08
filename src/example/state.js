import React, { useState } from "react";

function computerRandom() {
  console.log("calculation.....");
  return Math.trunc(Math.random() * 200);
}

function App() {
  //const [counter, setCounter] = useState( computerRandom())
  //const [counter, setCounter] = useState( 0)
  const [counter, setCounter] = useState(() => {
    return computerRandom();
  });

  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  function increment() {
    //setCounter( counter+1)
    //setCounter( counter+1)
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    //setCounter( prev => prev+1)
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Новое название",
      };
    });
  }

  return (
    <div className="btn btn-center ">
      <h1> Счётик: {counter}</h1>
      <button onClick={increment} className="btn btn-danger">
        {" "}
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-success">
        {" "}
        Убрать
      </button>
      <button onClick={updateTitle} className="btn btn-warning ">
        {" "}
        Изменить название
      </button>

      <pre> {JSON.stringify(state, null, 2)} </pre>
    </div>
  );
}

export default App;
