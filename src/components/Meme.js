import React from 'react';
import memesData from '../memesData.js';

export default function Meme() {

  // function handleMouseOver() {
  //   console.log("i was hovered")
  // }

  // function getMemeImage() {
  //   const memesArray = memesData.data.memes
  //   const randomNumber = Math.floor(Math.random()*memesArray.length)
  //   const url = memesArray[randomNumber].url
  //   console.log(url);

  // }

   const thingsArray = ["Thing 1", "Thing 2"]
   const things = thingsArray.map((item) => {
    return (
      <div key={item}>
      <p>{item}</p>
      </div>
    )
   })

   function getAnotherThing() {
      thingsArray.push(`Thing ${thingsArray.length + 1 }`);
      console.log(thingsArray)
    }

    ///////////////////////////////////
    ///////////////////////////////
  //state react challenge
  // function greeting(name1) {
  //   const date = new Date()
  //   const hours = date.getHours()
  //   let timeOfDay;

  //   if (hours > 4 && hours < 12){
  //     timeOfDay = "morning";
  //   } else if(hours > 12 && hours < 17){
  //     timeOfDay = "afternoon";
  //   } else if(hours > 17 && hours < 20){
  //     timeOfDay = "evening";
  //   } else {
  //     timeOfDay = "night";
  //   }
  //   return `Good ${timeOfDay}, ${name1} !`;
  // }
  // greeting("Bob");


const [isImportant, setIsImportant] = React.useState("wooowww")

    function handleClick () {
      setIsImportant("No")
    }


//function to keep track of counts !
    const [result2, setResult2] = React.useState(0)

    function handleClick2 () {
      setResult2(result2 - 1)
    }
    function handleClick3 () {
      setResult2(result2 + 1)
    }

  return (
    <main >
        <div className='form'>
          <input
           className='form--input'
           type="text"
           placeholder="Top text"
           />
          <input
           className='form--input'
           type="text"
           placeholder="Bottom text"
           />
        <button /*onClick={handleClick}*/ /*onClick={getAnotherThing}*/ /*onClick={getMemeImage}*/
        /*onMouseOver={handleMouseOver}*/ className='form--btn'> Get a new meme image 🖼</button>

        {/* {things} */}
        <h1>{isImportant}</h1>

        {/* Counter that keep counts challenge */}
        <button onClick={handleClick2} className='counter--minus'>-</button>
        <div className='counter--count'>
          <h1>{result2}</h1>
        </div>
        <button onClick={handleClick3}className='counter--minus'>+</button>

      </div>
    </main>
  )
}
