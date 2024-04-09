import { useLocation, Link } from "react-router-dom"
import React, { useState } from "react"
import HomeButton from "./HomeButton"
import alphabetList from "./alphabetList"
const Header = () => {

  const currentLocation = useLocation()
  const [alphabet, setAlphabet] = useState([])

  const handleClick = (letter) => {
    setAlphabet(letter)
  }

  return (
    <header>
      <h1>Fun with flags</h1>
      {currentLocation.pathname !== "/" && <HomeButton />}
      {currentLocation.pathname === "/" && 
       <ul className="listLetter">
        {alphabetList.map((letter) => {
          return <li key={letter}><Link to={`/letter/${letter}`} onClick={() => handleClick(letter)}>{letter}</Link></li>
        })}
       </ul>
      }
    </header>
  )
}
export default Header
