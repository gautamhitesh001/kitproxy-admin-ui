import { Provider } from "react-redux";
import { store } from "./appRedux/store";
import "./scss/App.scss";
import { AppRouter } from "./routes/routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme/theme";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AppRouter />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
