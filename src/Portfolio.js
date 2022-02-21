import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<div>
			<h2>Ecommerce Site</h2>
			<p>A minimalistic website written in Reactjs</p>
			<a
				href="https://veselin0.github.io/Ecommerce-Site/"
				target="_blank"
				rel="noopener noreferrer"
			>
				My Portfolio
				<img
					src={require("../src/imgs/ecommerce.png")}
					alt="me"
					width="500px"
					height="300px"
				/>
			</a>
			<Link to="/">Home</Link>
		</div>
	);
};

export default Portfolio;
