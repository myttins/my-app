import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [echo, setEcho] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("echoedString");
    if (storedValue) {
      setEcho(storedValue);
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("echoedString", input);
    window.location.reload();
  };

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{echo}</p>
    </div>
  );
};

export default App;
