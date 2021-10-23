import { Container } from "react-bootstrap"
import { Route, Switch } from "react-router"
import Navbar from "../Navbar/Navbar"
import Profile from "../Profile/Profile"
import Projects from "../Projects/Projects"
import Wheel from "../Wheel/Wheel"

import "./App.css"

const App = () => {
  return (
    <Container fluid="md" className="App">
      <Navbar />
      <Profile />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Wheel} />
      </Switch>
    </Container>
  )
}

export default App
