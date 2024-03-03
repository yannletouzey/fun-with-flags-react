import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from "./Map"
import Tooltip from "./Tooltip"
import { useEffect, useState, useRef } from "react"
import Country from "./Country"
import Header from "./Header"
import countries from "./countries"
import MatchCountries from "./MatchCountries"
import alpahbetList from "./alphabetList"
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
  const [locationCurrent, setLocationCurrent] = useState(null)

  useEffect(() => {
    setLocationCurrent(window.location.pathname)
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
      <Header locationCurrent={locationCurrent} />
      <main className="main" ref={mainRef}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Tooltip posMouse={posMouse} idForImg={idForImg} />
              <Map setIdForImg={setIdForImg} />
            </>
          }/>
          <Route path="/a" element={<MatchCountries />} />
          {countriesList.map((country, index) => (
            <Route key={index} path={`/${country.slug}`} element={<Country locationCurrent={locationCurrent} setLocationCurrent={setLocationCurrent}/>} />
          ))}
          {alpahbetList.map((letter) => {
            return <Route key={letter} path={`/${letter}`} element={<MatchCountries letter={letter} />} />
          })}
        </Routes>
      </BrowserRouter>
      </main>
    </>
  )
}

export default App
