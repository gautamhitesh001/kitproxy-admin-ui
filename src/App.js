import { ui_logo, app_version } from "./config/Constants";
import { Provider } from "react-redux";
import { store } from "./appRedux/store";
import "./App.scss";
import { AppRouter } from "./routes/routes";

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
