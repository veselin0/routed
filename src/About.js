import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h2>About Page</h2>
			<main>
				<p>This section contains information about...</p>
			</main>
			<Link to="/">Home</Link>
		</div>
	);
};

export default About;
