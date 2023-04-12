import React, {useState, useEffect} from 'react';


export default function Meme() {

    const [meme, setMeme] = useState({
      topText:'',
      bottomText: '',
      randomImage:'https://i.imgflip.com/1bij.jpg', // image en dur par défaut pour aps que React crash
    })

    const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    console.log("Effect ran !");
      fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme =>({
        ...prevMeme,
        [name]: value
      }))
      // console.log(event.target.value);
    }

    function getMemeImage() {
      const randomNumber = Math.floor(Math.random()*allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevMeme =>({
        ...prevMeme,
        randomImage: url
      }))
    }

  return (
    <main >
        <div className='form'>
          <input
           className='form--input'
           type="text"
           placeholder="Top text"
           name="topText"
           onChange={handleChange}
           value={meme.topText}
           />
          <input
           className='form--input'
           type="text"
           placeholder="Bottom text"
           name="bottomText"
           onChange={handleChange}
           value={meme.bottomText}
           />
        <button onClick={getMemeImage}
        /*onMouseOver={handleMouseOver}*/ className='form--btn'> Get a new meme image 🖼
        </button>
        </div>
          <div className='meme-container'>
            <img className='meme--image' src={meme.randomImage}></img>
            <h2 className='meme--text--top'>{meme.topText}</h2>
            <h2 className='meme--text--bottom'>{meme.bottomText}</h2>
          </div>

    </main>
  )
}
