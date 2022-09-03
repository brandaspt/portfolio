import { Link, useLocation } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
	const location = useLocation()
	return (
		<div className="Navbar py-4">
			<ul>
				<li>
					<Link
						to="/portfolio"
						className={location.pathname === "/portfolio" ? "selected" : ""}
					>
						{location.pathname === "/" ? "/HOME" : "HOME"}
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						className={location.pathname === "/projects" ? "selected" : ""}
					>
						{location.pathname === "/projects" ? "/PROJECTS" : "PROJECTS"}
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
