import { Col } from "react-bootstrap"
import headshot from "../../images/headshot.jpeg"
import { FaLinkedin, FaGithub, FaOdnoklassniki } from "react-icons/fa"
import { motion } from "framer-motion"
import "./Profile.css"

const Profile = () => {
	return (
		<motion.div
			className="Profile row py-4 py-md-0"
			initial={{ y: -800 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", duration: 0.6 }}
		>
			<Col md={6} className="pb-3">
				<img src={headshot} alt="my avatar" />
			</Col>
			<Col
				md={6}
				className="d-flex flex-column align-items-center justify-content-center"
			>
				<h2>HI I'M TIAGO</h2>
				<p className="mb-3">javascript fullstack developer</p>
				<div className="icons d-flex align-items-center justify-content-evenly">
					<a
						href="https://www.linkedin.com/in/engtiagobrandao/"
						target="_blank"
						rel="noreferrer"
						className="d-flex align-items-center justify-content-center"
					>
						<FaLinkedin color="white" />
						<p className="m-0">/engtiagobrandao</p>
					</a>
					<a
						href="https://github.com/brandaspt"
						target="_blank"
						rel="noreferrer"
						className="d-flex align-items-center justify-content-center"
					>
						<FaGithub color="white" />
						<p className="m-0">/brandaspt</p>
					</a>
					<a
						href="https://drive.google.com/file/d/1d2N6_0xvcP-4mw1PTeZlgo0QRku8HegA/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
						className="d-flex align-items-center justify-content-center"
					>
						<FaOdnoklassniki color="white" />
						<p className="m-0">resume</p>
					</a>
				</div>
			</Col>
		</motion.div>
	)
}

export default Profile
