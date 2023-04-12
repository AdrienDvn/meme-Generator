import React, {useState} from 'react';

import './App.css';
import './header.css';
import './meme.css';

import Header from './components/Header.js';
import Meme from './components/Meme.js';
import memesData from './memesData.js';
import ApiChallenge from './components/ApiChallenge';
import WindowTracker from "./components/WindowTracker.js"

function App() {

  const [show, setShow] = useState(true)

  function toggle() {
    console.log('wassup');
    return (
      setShow(!show)
    )
  }

  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <ApiChallenge/> */}

      {/* <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />} */}
    </div>
  );
}

export default App;
