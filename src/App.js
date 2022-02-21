import "./App.css";

import { Route, Switch } from "react-router-dom";
import About from "../src/About";
import Home from "../src/Home";
import Contact from "../src/Contact";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
