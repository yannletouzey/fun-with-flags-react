import { useEffect, useState } from 'react'
import countries from './countries'
import { Link, useParams } from 'react-router-dom';

const MatchCountries = () => {
  const {letterParam} = useParams()
  const [matchCountries, setMatchCountries] = useState([])

  useEffect(() => {
    const filteredCountries = countries.filter(country => country.slug[0] === letterParam);
    setMatchCountries(filteredCountries);
  }, []);
  
  return (
    <div className="container__matchCountries">
      <ul className="containerLinkCountryLetter">
        {matchCountries.map((country, index) => {
          return (
            <li className="linkCountry" style={{backgroundImage: `url(${country.img.toLowerCase()})`}} key={index}><span></span><Link to={`/${country.slug}`} key={index}><p>{country.name}</p></Link></li>
          )
        })}
      </ul>
    </div>
  )
}

export default MatchCountries
