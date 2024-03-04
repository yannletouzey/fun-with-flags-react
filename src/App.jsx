import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Country from "./Country"
import Header from "./Header"
// import countries from "./countries"
import MatchCountries from "./MatchCountries"
import MainHome from "./MainHome"
function App() {

  const [idForImg, setIdForImg] = useState("")

  const [posMouse, setPosMouse] = useState({
    x: 0,
    y: 0,
  })

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainHome posMouse={posMouse} setPosMouse={setPosMouse} idForImg={idForImg} setIdForImg={setIdForImg} />} />
          <Route path="/:countryParam" element={<Country />} />
          <Route path="/letter/:letterParam" element={<MatchCountries />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
