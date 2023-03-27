import React, {useState} from 'react';
import memesData from '../memesData.js';

import starEmpty from '../star--empty.jpg';
import starFull from '../star--full.png';

export default function Meme() {

  // function handleMouseOver() {
  //   console.log("i was hovered")
  // }



  //  function getAnotherThing() {
  //     thingsArray.push(`Thing ${thingsArray.length + 1 }`);
  //     console.log(thingsArray)
  //   }

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


const [isImportant, setIsImportant] = useState("wooowww")

    function handleClick () {
      setIsImportant("No")
    }


//function to keep track of counts !
    // const [count, setCount] = React.useState(0)

    // function add () {
    //   setCount(prevCount => prevCount + 1)
    // }
    // function subtract () {
    //   setCount(prevCount => prevCount - 1)
    // }


    // Display the image url in the meme generator challenge !
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
      const memesArray = memesData.data.memes
      const randomNumber = Math.floor(Math.random()*memesArray.length)
      const url = memesArray[randomNumber].url
      setMemeImage(url)
    }

      //////////////////////////////////////////
    //ternary operator state challenge
    const [isGoingOut, setIsGoingOut] = useState(true)

    // function flipState() {
    //   // console.log("ok");
    //   setIsGoingOut(prevState => !prevState)
    // }


    ///////////////////////////////////////////////////////////
    //Array state challenge
    // const thingsArray = ["Thing 1", "Thing 2"] devient
    const [thingsArray, setThingsArray] = useState(["Thing 1 ", " Thing 2"])

    function addItem() {
      setThingsArray((prevThingsArray) => {
        return [...prevThingsArray,`thing + ${thingsArray.length + 1}`]
      })
    }
  //  const things = thingsArray.map((item) => {
  //   return (
  //     <div key={item}>
  //     <p>{item}</p>
  //     </div>
  //   )
  //  })

  ///////////////////////////////////////////
  //////////////////////////////////////////
  // OBJECT react state challenge
  let isFavorite

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone : "+33 792 374 892",
    email: "bobbarker@gmail.com",
    isFavorite: false,
  })

  ///////////UPDATING OBJECT STATE/////////////////
  let starIcon = contact.isFavorite? starFull : starEmpty;
  // let starIcon = contact.isFavorite? "star--full.jpg" : "star--empty.jpg"

  function toggleFavorite() {
    // console.log("Toggle Favorite")
    setContact(prevContact => {return {
      ...prevContact,
      isFavorite : !prevContact.isFavorite
    }})
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
        <button onClick={getMemeImage} /*onClick={handleClick}*/ /*onClick={getAnotherThing}*/
        /*onMouseOver={handleMouseOver}*/ className='form--btn'> Get a new meme image 🖼
        </button>
      {/* <button onClick={() => setIsGoingOut(!isGoingOut)} /*OU ALORS onClick={flipstate} et voir la function plus haut*//*className='counter--minus'>wazzaaaaaa?</button>*/}
        {/* <h1>{isGoingOut? 'yes' : 'no'}</h1> */}
        </div>
        {/* <button onClick={addItem} className='counter--minus'>ARRAY Challenge</button> */}
        {/* {thingsArray} */}
        {/* <h1>{isImportant}</h1> */}
        <img className='meme--image' src={memeImage}></img>

        {/* Counter that keep counts challenge */}
        {/* <button onClick={subtract} className='counter--minus'>-</button>
        <div className='counter--count'>
          <h1>{count}</h1>
        </div>
        <button onClick={add}className='counter--minus'>+</button> */}
        <p>{contact.firstName} {contact.lastName}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>

        <img src={starIcon} onClick={toggleFavorite}alt=""/>
        {/* <img src={`../${starIcon}`} alt=""/> */}
    </main>
  )
}
