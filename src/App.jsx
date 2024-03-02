import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Map from "./Map"
import Tooltip from "./Tooltip"
import { useEffect, useState, useRef } from "react"
import Country from "./Country"
import Header from "./Header"

function App() {

  const [idForImg, setIdForImg] = useState("")

  const [posMouse, setPosMouse] = useState({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (e) => {
    setPosMouse({
      x: e.clientX,
      y: e.clientY,
    })
  }
  const [locationCurrent, setLocationCurrent] = useState(window.location.pathname)

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    setLocationCurrent(window.location.pathname)
  }, [locationCurrent])

  return (
    <>
      <Header />
      <main className="main">
        {locationCurrent === '/' ? 
          <>
            <Tooltip posMouse={posMouse} idForImg={idForImg} />
            <Map setIdForImg={setIdForImg} />
          </>
          :
          <Country locationCurrent={locationCurrent} />
        }
      </main>
    </>
  )
}

export default App
