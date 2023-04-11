import React, {useState, useEffect} from 'react'

export default function ApiChallenge() {

  const [starWarsdata, setStarWarsData] = useState({})

  const [count, setCount] = useState(0)

  useEffect(function() {
    console.log("Effect ran !");
      fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [])

  console.log("Component Rendered");


  return (
    <div>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
      <h1>the count is {count}</h1>
      <button onClick={()=> setCount(prevCount => prevCount +1)}>Add</button>
    </div>
  )

}
