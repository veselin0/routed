import "./App.css";
import { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

class App extends Component {
	render() {
		return (
			<div className="App">
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
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
