import { useLocation } from "react-router-dom"
import { useRef, useEffect } from "react"
import Map from "./Map"
import Tooltip from "./Tooltip"
import Country from "./Country"
export default function MainHome({ posMouse, setPosMouse, idForImg, setIdForImg }) {
  const currentLocation = useLocation()
  const mainRef = useRef()
  const handleMouseMove = (e) => {
    setPosMouse({
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    mainRef.current.addEventListener("mousemove", handleMouseMove)
  }, [])
  return (
    <main className="main" ref={mainRef}>
      {currentLocation.pathname === "/" && 
      <>
        <Tooltip posMouse={posMouse} idForImg={idForImg} />
        <Map setIdForImg={setIdForImg} />
      </>
      }
      {currentLocation.pathname !== "/" && <Country />}
    </main>
  )
}
