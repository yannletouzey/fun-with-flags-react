/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import countries from "./countries"
import Header from "./Header"

const Country = ({ locationCurrent }) => {

  const [dataCountry, setDataCountry] = useState({
    name: "",
    flag: "",
    region: "",
    subregion: "",
    capital: "",
    population: "",
    languages: "",
    currencies: "",
    borders: "",
  })

  useEffect(() => {
    countries.map((country) => {
      if (country.name === locationCurrent.replace("/", "")) {
        setDataCountry({
          name: country.name,
          flag: country.img.toLocaleLowerCase(),
        })
      }
    })
  }, [])

  return (
    <>
      <h2>{dataCountry.name}</h2>
      <a href="/">Home</a>
      <img src={dataCountry.flag} alt={dataCountry.name} />
    </>
  )
}

export default Country
