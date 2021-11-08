import React, { useState, useCallback } from "react";
import ItemsList from "./example/ItemsList";


function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = { color: colored ? "red" : "green" }

  const generateItemFromAPI= useCallback(
    () => {return new Array(count).fill('').map((_, i)=> `Элемент ${i+1}` ) },
    [count])    
  

  return (
    <>
      <h1 style={styles}> Колличество элементов: {count} </h1>

      <button
        className="btn btn-success" onClick={() => setCount((prev) => prev + 1)}
      >{" "}Добавить{" "}</button>
    
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}
      >{" "}Изменить цвет{" "}</button>

      < ItemsList getItems={generateItemFromAPI} />
    </>
  );
}

export default App;
