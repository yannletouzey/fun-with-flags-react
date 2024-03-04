import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from "./Map"
import Tooltip from "./Tooltip"
import { useEffect, useState, useRef } from "react"
import Country from "./Country"
import Header from "./Header"
// import countries from "./countries"
import MatchCountries from "./MatchCountries"
import alpahbetList from "./alphabetList"
import MainHome from "./MainHome"
function App() {
  // const [countriesList, setCountriesList] = useState([])

  const [idForImg, setIdForImg] = useState("")

  const [posMouse, setPosMouse] = useState({
    x: 0,
    y: 0,
  })

  // const [locationCurrent, setLocationCurrent] = useState(null)

  // useEffect(() => {
  //   // setLocationCurrent(window.location.pathname)
  //   setCountriesList(countries)
  // }, [])
  
  // useEffect(() => {
    // setLocationCurrent(window.location.pathname)
  // }, [locationCurrent])

  return (
    <>
      {/* <Header locationCurrent={locationCurrent} /> */}
      {/* <main className="main" ref={mainRef}> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainHome posMouse={posMouse} setPosMouse={setPosMouse} idForImg={idForImg} setIdForImg={setIdForImg} />} />
          <Route path="/:countryParam" element={<Country />} />
          <Route path="/letter/:letterParam" element={<MatchCountries />} />
          {/* {alpahbetList.map((letter) => {
            return <Route key={letter} path={`/${letter}`} element={<MatchCountries letter={letter} />} />
          })} */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
