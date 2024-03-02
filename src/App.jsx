import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from "./Map"
import Tooltip from "./Tooltip"
import { useEffect, useState, useRef } from "react"
import Country from "./Country"
import Header from "./Header"
import countries from "./countries"

function App() {
  const [countriesList, setCountriesList] = useState([])

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
  const mainRef = useRef()
  const [locationCurrent, setLocationCurrent] = useState(window.location.pathname)

  useEffect(() => {
    setCountriesList(countries)
    mainRef.current.addEventListener("mousemove", handleMouseMove)
    return () => {
      mainRef.current.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  
  useEffect(() => {
    setLocationCurrent(window.location.pathname)
  }, [locationCurrent])

  return (
    <>
      <Header />
      <main className="main" ref={mainRef}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Tooltip posMouse={posMouse} idForImg={idForImg} />
              <Map setIdForImg={setIdForImg} />
            </>
          }/>
          {countriesList.map((country, index) => (
            <Route key={index} path={`/${country.name}`} element={<Country />} />
          ))}
        </Routes>
      </BrowserRouter>
      </main>
    </>
  )
}

export default App
