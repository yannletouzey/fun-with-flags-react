/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import countries from "./countries"

const Tooltip = ({ posMouse, idForImg }) => {

  const [flag, setFlag] = useState(null)

  const tooltipRef = useRef()
  useEffect(() => {
    tooltipRef.current.style.left = `${(posMouse.x - tooltipRef.current.getBoundingClientRect().width / 2)}px`
    tooltipRef.current.style.top = `${(posMouse.y - tooltipRef.current.getBoundingClientRect().height - 10)}px`
  })
  useEffect(() => {
    countries.map((country) => {
      if (country.code.toLowerCase() === idForImg) {
        setFlag(country.img.toLocaleLowerCase())
      }
    })
  }, [idForImg])
  const handleEnter = () => {
    tooltipRef.current.classList.remove("is-hidden")
  }
  const handleLeave = () => {
    tooltipRef.current.classList.add("is-hidden")
  }
  useEffect(() => {
    const link = document.querySelectorAll("a")
    link.forEach((link) => {
      link.addEventListener("mouseenter", handleEnter)
      link.addEventListener("mouseleave", handleLeave)
      return () => {
        link.removeEventListener("mouseenter", handleEnter)
        link.removeEventListener("mouseleave", handleLeave)
      }
    })
  }, [])
  return (
    <div className="tooltip is-hidden" ref={tooltipRef}>
      <img src={`${flag}`} alt={`Flag ${flag}`} />
    </div>
  )
}
export default Tooltip
