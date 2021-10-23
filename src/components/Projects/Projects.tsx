import { Col } from "react-bootstrap"
import { motion } from "framer-motion"
import journeyLogLogo from "../../images/JourneyLogLogo.png"

import "./Projects.css"

const Projects = () => {
  return (
    <motion.div className="Projects py-5 row" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: "spring", mass: 0.6 }}>
      <h2>PROJECTS</h2>
      <Col md={4} className="d-flex align-items-center justify-content-center">
        <a href="https://journey-log-fe.vercel.app/" target="_blank" rel="noreferrer">
          <img src={journeyLogLogo} alt="journey log" />
        </a>
      </Col>
      <Col md={8}>
        <ul className="d-flex flex-column m-0">
          <li>
            <p>mern stack application using typescript and leaflet</p>
          </li>
          <li>
            <p>build a custom, interactive map with your travels' photos</p>
          </li>
          <li>
            <a href="https://journey-log-fe.vercel.app/" target="_blank" rel="noreferrer">
              live demo
            </a>
          </li>
          <li>
            <a href="https://github.com/brandaspt/journey-log-be" target="_blank" rel="noreferrer">
              backend repo
            </a>
          </li>
          <li>
            <a href="https://github.com/brandaspt/journey-log-fe" target="_blank" rel="noreferrer">
              frontend repo
            </a>
          </li>
        </ul>
      </Col>
    </motion.div>
  )
}

export default Projects
