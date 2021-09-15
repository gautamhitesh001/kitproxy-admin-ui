import { ui_logo, app_version } from "./config/Constants";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={ui_logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
					<br />
					<br />
					Program Version : {app_version}
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
