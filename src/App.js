import React, { useState, useEffect } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("Value changed", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const clear = ()=> setValue('')
  return {
    bind: {value, onChange },
    value,
    clear
  };
}

function App() {
  const input = useInput("");
  const lastName = useInput("");
  // const [name, setName] = useState('')
  // const changeHandler = event => {
  //  setName(event.target.value)   }

  useLogger(input.value);
  useLogger(lastName.value);
  return (
    <div className={"container pt-3"}>
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear() }  >Очистить</button>
      <input type="text" {...lastName.bind} />
      {/* value={input.value} onChange={input.onChange} */}
      
      <button className="btn btn-danger" onClick={() => lastName.clear() }  >Очистить</button>
      <h1> {input.value} {lastName.value}</h1>
    
    </div>
  );
}

export default App;
