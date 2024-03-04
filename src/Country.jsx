/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import countries from "./countries"
import { useLocation, useParams } from "react-router-dom"

const Country = () => {
// const Country = ({ locationCurrent, setLocationCurrent }) => {

  // useEffect(() => {
  //   setLocationCurrent(window.location.pathname)
  // }, [locationCurrent])

  const [dataCountry, setDataCountry] = useState(
    {
      name: "",
      flag: "",
      code: "",
      capital: "",
    }
  )
  
  const {countryParam} = useParams()
  useEffect(() => {
    countries.map((country) => {
      if (country.slug === countryParam) {
        setDataCountry({
          name: country.name,
          flag: country.img.toLocaleLowerCase(),
          code: country.code,
          capital: country.capital,
          population: country.population,
        })
      }
    })
  }, [])

  return (
    <div className="country">
      <h2>{dataCountry.name}</h2>
      <div className="country_container">
        <div className="country_left">
          <p>Capital: <b>{dataCountry.capital}</b></p>
          <p>Population: <b>{dataCountry.population}</b></p>
        </div>
        <div className="country_right">
          <img src={dataCountry.flag} alt={dataCountry.name} />
        </div>
      </div>
    </div>
  )
}

export default Country
