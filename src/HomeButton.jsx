import { Link } from "react-router-dom"

const HomeButton = () => {
  return (
    <div className="container__linkHome">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      <a className="linkHome" href="/"><p>Accueil</p></a>
      <svg>
        <defs>
            <filter id="goo">
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 60 -15" />
                <feBlend in="SourceGraphic"/>
            </filter>
        </defs>
      </svg>
    </div>
  )
}

export default HomeButton
