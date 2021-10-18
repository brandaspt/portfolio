import { Col, Container, Row } from "react-bootstrap"
import Profile from "../Profile/Profile"
import Projects from "../Projects/Projects"
import Wheel from "../Wheel/Wheel"

import "./App.css"

const App = () => {
  return (
    <Container fluid="md" className="App">
      <Profile />
      <Row className="py-5">
        <Col>
          <Wheel />
        </Col>
      </Row>
      <Projects />
    </Container>
  )
}

export default App
