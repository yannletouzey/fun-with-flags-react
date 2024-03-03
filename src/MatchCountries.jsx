import { useEffect, useState } from 'react'
import countries from './countries'

const MatchCountries = ({ letter }) => {

  const [matchCountries, setMatchCountries] = useState([])
  
  useEffect(() => {
    const filteredCountries = countries.filter(country => country.slug[0] === letter);
    setMatchCountries(filteredCountries);
  }, [letter]);
  
  return (
    <div className="container__matchCountries">
      <ul className="containerLinkCountryLetter">
        {matchCountries.map((country, index) => {
          return (
            <li className="linkCountry" style={{backgroundImage: `url(${country.img.toLowerCase()})`}} key={index}><span></span><a href={`/${country.slug}`} key={index}><p>{country.name}</p></a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default MatchCountries
