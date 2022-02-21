import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<nav>
				<ul id="navigation">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Home;
