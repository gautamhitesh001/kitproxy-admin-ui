import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
import { alertConstant } from "../appRedux/constants";

export const AlertContext = React.createContext();

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertProvider = ({ children }) => {
	const { severity, msg } = useSelector(({ alert }) => alert);
	const [open, setOpen] = React.useState(Boolean(severity && msg));
	const dispatch = useDispatch();
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	useEffect(() => {
		console.log("path >>", severity, msg, severity && msg);
		if (severity && msg) setOpen(true);
	}, [severity, msg]);

	useEffect(() => {
		if (!open) {
			// setTimeout(() => {
			dispatch({
				type: alertConstant.REMOVE,
			});
			// }, 5000);
			setOpen(false);
		}
	}, [open]);

	return (
		<AlertContext.Provider value={(severity, msg)}>
			{severity && (
				<Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={open} autoHideDuration={4000} onClose={handleClose}>
					<Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
						{msg}
					</Alert>
				</Snackbar>
			)}
			{children}
		</AlertContext.Provider>
	);
};

AlertProvider.propTypes = {
	children: PropTypes.any,
};

// export const useAlertContext = () => {
// 	return React.useContext(AlertContext);
// };
