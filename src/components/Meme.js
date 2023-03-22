import memesData from '../memesData.js';

export default function Meme() {

  // function handleMouseOver() {
  //   console.log("i was hovered")
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

  // function getMemeImage() {
  //   const memesArray = memesData.data.memes
  //   const randomNumber = Math.floor(Math.random()*memesArray.length)
  //   const url = memesArray[randomNumber].url
  //   console.log(url);

  // }

  //state react challenge
  function greeting(name1) {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;

    if (hours > 4 && hours < 12){
      timeOfDay = "morning";
    } else if(hours > 12 && hours < 17){
      timeOfDay = "afternoon";
    } else if(hours > 17 && hours < 20){
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }
    return `Good ${timeOfDay}, ${name1} !`;
  }
  greeting("Bob");





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
        <button onClick={getAnotherThing} /*onClick={getMemeImage}*/
        /*onMouseOver={handleMouseOver}*/ className='form--btn'> Get a new meme image 🖼</button>
        {things}
        </div>
    </main>
  )
}
