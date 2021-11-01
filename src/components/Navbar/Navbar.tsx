import { Link, useLocation } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className="Navbar py-4">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "selected" : ""}>
            {location.pathname === "/" ? "/HOME" : "HOME"}
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === "/projects" ? "selected" : ""}>
            {location.pathname === "/projects" ? "/PROJECTS" : "PROJECTS"}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
