import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('')
  const [echo, setEcho] = useState('')

  const handleSubmit = () => {
    setEcho(input)
  }


  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <p>{echo}</p>
    </div>
  );
}

export default App;
