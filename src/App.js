import { Provider } from "react-redux";
import { store } from "./appRedux/store";
import "./scss/App.scss";
import { AppRouter } from "./routes/routes";

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
