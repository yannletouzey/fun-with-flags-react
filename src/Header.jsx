import { useEffect, useState } from "react"
import HomeButton from "./HomeButton"
const Header = ({ locationCurrent }) => {

  return (
    <header>
      <h1>Fun with flags</h1>
      {locationCurrent !== "/" && <HomeButton />}
    </header>
  )
}
export default Header
