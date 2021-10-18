import { Col, Row } from "react-bootstrap"
import headshot from "../../images/headshot.jpeg"
import { FaLinkedin, FaGithub, FaOdnoklassniki } from "react-icons/fa"
import "./Profile.css"

const Profile = () => {
  return (
    <Row className="Profile gy-4">
      <Col md={6}>
        <img src={headshot} alt="my avatar" />
      </Col>
      <Col md={6}>
        <h2>HI I'M TIAGO</h2>
        <p className="mb-3">javascript fullstack developer</p>
        <div className="d-flex flex-column align-items-center">
          <a
            href="https://www.linkedin.com/in/engtiagobrandao/"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center justify-content-start"
          >
            <FaLinkedin color="white" />
            <p className="m-0">/engtiagobrandao</p>
          </a>
          <a
            href="https://github.com/brandaspt"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center justify-content-start"
          >
            <FaGithub color="white" />
            <p className="m-0">/brandaspt</p>
          </a>
          <a
            href="https://drive.google.com/file/d/1jce-5lm_Uo5UOxqEY_tnjmqPC0P4ePZs/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center justify-content-start"
          >
            <FaOdnoklassniki color="white" />
            <p className="m-0">resume</p>
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default Profile
