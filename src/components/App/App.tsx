import { AnimatePresence } from "framer-motion"
import { Container } from "react-bootstrap"
import { Route, Switch, useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Profile from "../Profile/Profile"
import Projects from "../Projects/Projects"
import Wheel from "../Wheel/Wheel"

import "./App.css"

const App = () => {
	const location = useLocation()
	return (
		<Container fluid="md" className="App">
			<Navbar />
			<Profile />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path={["/", "/portfolio"]} component={Wheel} />
					<Route path="/projects" component={Projects} />
				</Switch>
			</AnimatePresence>
		</Container>
	)
}

export default App
