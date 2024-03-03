import HomeButton from "./HomeButton"

const Header = ({ locationCurrent }) => {
  // const [alphabet, setAlphabet] = useState([])

  // const handleClick = (letter) => {
  //   setAlphabet(letter)
  // }

  return (
    <header>
      <h1>Fun with flags</h1>
      {locationCurrent !== "/" && <HomeButton />}
      {/* {locationCurrent === "/" && 
       <ul className="listLetter">
        {alphabetList.map((letter) => {
          return <li key={letter}><a href={`/${letter}`} onClick={() => handleClick(letter)}>{letter}</a></li>
        })}
       </ul>
      } */}
    </header>
  )
}
export default Header
