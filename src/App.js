import { ui_logo, app_version } from "./config/Constants";
import { Provider } from "react-redux";
import { store } from "./appRedux/store";
import "./App.scss";

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
