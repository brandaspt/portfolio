import { Col, Row } from "react-bootstrap"
import { motion } from "framer-motion"
import journeyLogLogo from "../../images/JourneyLogLogo.png"
import whatsappLogo from "../../images/whatsapp.png"
import spotifyLogo from "../../images/spotify.png"

import "./Projects.css"

const Projects = () => {
  return (
    <motion.div
      className="Projects py-4 row"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", mass: 0.6 }}
      exit={{ x: "100vw", transition: { ease: "easeInOut" } }}
    >
      <h2>PROJECTS</h2>
      <Row>
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
      </Row>
      <Row>
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <img src={whatsappLogo} alt="whatsapp clone" />
        </Col>
        <Col md={8}>
          <ul className="d-flex flex-column m-0">
            <li>
              <p>mern stack whatsapp clone chat application showcasing socketio</p>
            </li>
            <li>
              <a href="https://github.com/brandaspt/whatsappBE" target="_blank" rel="noreferrer">
                backend repo
              </a>
            </li>
            <li>
              <a href="https://github.com/brandaspt/whatsappFE" target="_blank" rel="noreferrer">
                frontend repo
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <img src={spotifyLogo} alt="spotify clone" />
        </Col>
        <Col md={8}>
          <ul className="d-flex flex-column m-0">
            <li>
              <p>mern stack spotify clone application showcasing react, redux, redux-persist</p>
            </li>
            <li>
              <p>featuring full custom css player</p>
            </li>
            <li>
              <a href="https://brandaspt.github.io/spotify-redux-persist/" target="_blank" rel="noreferrer">
                live demo
              </a>
            </li>

            <li>
              <a href="https://github.com/brandaspt/spotify-redux-persist" target="_blank" rel="noreferrer">
                github repo
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Projects
