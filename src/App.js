import { Provider } from "react-redux";
import { store, persistor } from "./appRedux/store";
import "./scss/App.scss";
import { AppRouter } from "./routes/routes";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./config/theme";
import { PersistGate } from "redux-persist/integration/react";
import { AlertProvider } from "./contexts/AlertContext";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<PersistGate loading={<>Loading...</>} persistor={persistor}>
					{/* <AlertProvider> */}
					<CssBaseline />
					<AppRouter />
					{/* </AlertProvider> */}
				</PersistGate>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
