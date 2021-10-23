import WheelItem from "../WheelItem/WheelItem"
import reactLogo from "../../images/react.png"
import reduxLogo from "../../images/redux.png"
import tsLogo from "../../images/ts.png"
import mongoLogo from "../../images/mongo.png"
import expressLogo from "../../images/express.png"
import nodeLogo from "../../images/node.png"
import gitLogo from "../../images/git.png"
import htmlcssLogo from "../../images/htmlcss.png"
import { Col } from "react-bootstrap"
import { AnimatePresence, motion } from "framer-motion"
import "./Wheel.css"

const Wheel = () => {
  const squareSide = 200
  const radius = Math.sqrt(2 * ((squareSide / 2) * (squareSide / 2)))

  const styles = {
    height: `${squareSide}px`,
    width: `${squareSide}px`,
  }

  // const generateItems = () => {
  //   let items = []
  //   for (let i = 0; i < 360; i += 45) {
  //     items.push(<WheelItem theta={i} radius={radius} url={logo} key={`item${i}`} />)
  //   }
  //   return items
  // }

  return (
    <AnimatePresence>
      <motion.div
        className="py-2 row"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", mass: 0.6 }}
        exit={{ x: "100vw" }}
        key="wheel"
      >
        <Col>
          <div className="d-flex justify-content-center">
            <div className="wheel-wrapper">
              <div className="Wheel" style={styles}>
                <WheelItem theta={0} radius={radius} url={reactLogo} key={`item${0}`} />
                <WheelItem theta={45} radius={radius} url={reduxLogo} key={`item${45}`} />
                <WheelItem theta={90} radius={radius} url={tsLogo} key={`item${90}`} />
                <WheelItem theta={135} radius={radius} url={mongoLogo} key={`item${135}`} />
                <WheelItem theta={180} radius={radius} url={expressLogo} key={`item${180}`} />
                <WheelItem theta={225} radius={radius} url={nodeLogo} key={`item${225}`} />
                <WheelItem theta={270} radius={radius} url={gitLogo} key={`item${270}`} />
                <WheelItem theta={315} radius={radius} url={htmlcssLogo} key={`item${315}`} />
              </div>
              <div className="text">
                <p className="m-0">MAIN TECH STACK</p>
              </div>
            </div>
          </div>
        </Col>
      </motion.div>
    </AnimatePresence>
  )
}

export default Wheel
