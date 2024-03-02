/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import countries from "./countries"
import Header from "./Header"
import HomeButton from "./HomeButton"

const Country = () => {

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
      if (country.name === window.location.pathname.replace("/", "")) {
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
      <HomeButton />
      <img src={dataCountry.flag} alt={dataCountry.name} />
    </>
  )
}

export default Country
