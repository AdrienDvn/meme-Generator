import React, {useState, useEffect} from 'react'

export default function WindowTracker(props) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=> {
    function watchWidth() {
      console.log("setting up...")
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)

    return function () {
      console.log("cleaning up...")
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  return (
    <h1>Window Width: {windowWidth}</h1>
  )
}
