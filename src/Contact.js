import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<h2>Contact Page</h2>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<Link to="/">Home</Link>
		</div>
	);
};

export default Contact;
