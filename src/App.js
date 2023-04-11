import React, {useState} from 'react';

import './App.css';
import './header.css';
import './meme.css';

import Header from './components/Header.js';
import Meme from './components/Meme.js';
import memesData from './memesData.js';
import ApiChallenge from './components/ApiChallenge';

function App() {
  ////passing data through state challenge///
  const [user, setUser] = useState('Bobby')


  return (
    <div className="App">
      {/* <Header user={user}/>
      <Meme user={user}/> */}
      <ApiChallenge/>
    </div>
  );
}

export default App;
