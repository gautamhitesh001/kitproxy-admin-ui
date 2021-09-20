import "../../../scss/login.scss";
import { ui_logo, app_version } from "../../../config/Constants";
import Typography from '@mui/material/Typography';

export const Login = () => {
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
				<Typography variant="h1" component="div" gutterBottom>
					Learn React
				</Typography>
			</header>
		</div>
	);
};
