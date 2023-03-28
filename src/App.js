import React, {useState} from 'react';

import './App.css';
import './header.css';
import './meme.css';

import Header from './components/Header.js';
import Meme from './components/Meme.js';
import memesData from './memesData.js';

function App() {
  ////passing data through state challenge///
  const [user, setUser] = useState('Joe')


  return (
    <div className="App">
      <Header />
      <Meme user={''}/>
    </div>
  );
}

export default App;
