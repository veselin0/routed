import "./App.css";

import { Route, Switch } from "react-router-dom";
import About from "../src/About";
import Home from "../src/Home";
import Portfolio from "./Portfolio";

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
				<Route path="/portfolio">
					<Portfolio />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
