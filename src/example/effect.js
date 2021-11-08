import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  //  useEffect(() => {
  //    console.log('Render')})
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("Clean type");
    };
  }, [type]);

  const mousemoveHandler = (event) => {
    setPos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    console.log("componentDidMount");
    window.addEventListener("mousemove", mousemoveHandler);
    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>Ресурс: {type} </h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Посты</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
