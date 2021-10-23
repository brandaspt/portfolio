import { Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
    <ul className="Navbar p-3">
      <li className="me-5">
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/projects">PROJECTS</Link>
      </li>
    </ul>
  )
}

export default Navbar
