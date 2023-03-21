import './App.css';
import './header.css';
import './meme.css';

import Header from './components/Header.js';
import Meme from './components/Meme.js';
import memesData from './memesData.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
