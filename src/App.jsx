import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Map from "./Map"
import Tooltip from "./Tooltip"
import { useEffect, useState, useRef } from "react"
import Country from "./Country"
import Header from "./Header"
import countries from "./countries"
function App() {
  const [countriesList, setCountriesList] = useState(countries)

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
        <Tooltip posMouse={posMouse} idForImg={idForImg} />
        {/* {locationCurrent === '/' ? 
          <>
            <Tooltip posMouse={posMouse} idForImg={idForImg} />
            <Map setIdForImg={setIdForImg} />
          </>
          :
          <Country locationCurrent={locationCurrent} />
        } */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Map setIdForImg={setIdForImg} />} />
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
