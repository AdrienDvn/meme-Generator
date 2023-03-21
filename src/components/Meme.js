
export default function Meme() {
  function handleClick() {
    console.log("i was clicked")
  }

  return (
    <main >
        <form className='form'>
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
        <button onClick={handleClick} className='form--btn'> Get a new meme image 🖼</button>
        </form>
    </main>
  )
}


