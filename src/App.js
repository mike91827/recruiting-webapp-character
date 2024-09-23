import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import CharacterCreator from './components/CharacterCreator.js';


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
        <CharacterCreator/>
      </section>
    </div>
  );
}

export default App;
