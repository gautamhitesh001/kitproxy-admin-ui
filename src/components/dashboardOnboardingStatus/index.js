import { Button, Card, CardContent, CardHeader, Collapse, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Maximize2, MoreVertical } from "react-feather";
import { useHistory } from "react-router";
import { CircularProgressWithLabel } from "../circularProgressWithLabel";
import PropTypes from "prop-types";
import { ui_successWithTick } from "../../config/Constants";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	bottomContainer: {
		width: 325,
		position: "fixed",
		bottom: 70,
		right: 70,
		display: "flex",
		flexDirection: "column",
		border: "none !important",
		boxShadow: "11px 21px 19px rgba(0, 0, 0, 0.06) !important",
		borderRadius: "8px !important",
	},
	componentContainer: {
		position: "fixed",
		bottom: 70,
		right: 70,
		display: "flex",
		flexDirection: "column",
		border: "none !important",
	},
	header: {
		borderBottom: "1px solid #E8E8E8",
	},
	content: {
		paddingBottom: "40px !important",
		paddingTop: "24px !important",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	btnResume: {
		textTransform: "none !important",
		border: "2px solid #F4672A !important",
		width: 120,
		height: 48,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.palette.common.white + " !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
}));

const DeploymentInprogress = ({ isComponentCard, time, value, setDisplayCard }) => {
	const classes = useStyles();

	if (isComponentCard) {
		return (
			<>
				<Typography textAlign="center" width="65%" variant="body2" color="black.80">
					Deployment in progress
				</Typography>
				<Typography mt={1} textAlign="center" width="65%" variant="subtitle2" color="common.black">
					{time + " mins to go"}
				</Typography>
				<Box mt={4} />
				<CircularProgressWithLabel size={65} value={value} />
			</>
		);
	}
	return (
		<Box onMouseEnter={() => setDisplayCard(true)} onMouseLeave={() => setDisplayCard(false)} className={classes.componentContainer}>
			<CircularProgressWithLabel size={65} value={value} />
		</Box>
	);
};

const DeploymentCompleted = ({ isComponentCard, setDisplayCard }) => {
	const classes = useStyles();

	if (isComponentCard) {
		return (
			<>
				<Typography textAlign="center" width="65%" variant="subtitle2" color="common.black">
					Deployment Complete
				</Typography>
				<Box mt={4} />
				<img src={ui_successWithTick} alt="success" />
			</>
		);
	}
	return (
		<Box onMouseEnter={() => setDisplayCard(true)} onMouseLeave={() => setDisplayCard(false)} className={classes.componentContainer}>
			<img src={ui_successWithTick} alt="success" />
		</Box>
	);
};

const ResumeDeployment = ({ isComponentCard, setDisplayCard }) => {
	const classes = useStyles();

	if (isComponentCard) {
		return (
			<>
				<Typography textAlign="center" width="65%" variant="body2" color="black.80">
					Resume to Finish your Project setup
				</Typography>
				<Box mt={4} />
				<Button disableRipple={true} disableFocusRipple={true} classes={{ root: classes.btnResume }} variant="outlined">
					Resume
				</Button>
			</>
		);
	}
	return (
		<Box onMouseEnter={() => setDisplayCard(true)} onMouseLeave={() => setDisplayCard(false)} className={classes.componentContainer}>
			<Button disableRipple={true} disableFocusRipple={true} classes={{ root: classes.btnResume }} variant="outlined">
				Resume
			</Button>
		</Box>
	);
};

export const DashboardOnboardingStatus = () => {
	const classes = useStyles();
	const history = useHistory();

	const [showCard, setShowCard] = useState(true);
	const [currentComponent, setCurrentComponent] = useState(2);

	useEffect(() => {
		minimizeContent();
	}, []);

	const minimizeContent = async () => {
		setTimeout(() => {
			setShowCard(false);
		}, 3000);
	};

	const getDisplayComponent = () => {
		switch (currentComponent) {
			case 0:
				return <DeploymentInprogress setDisplayCard={(flag) => setShowCard(flag)} isComponentCard={showCard} time={2} value={75} />;
			case 1:
				return <DeploymentCompleted setDisplayCard={(flag) => setShowCard(flag)} isComponentCard={showCard} />;
			case 2:
				return <ResumeDeployment setDisplayCard={(flag) => setShowCard(flag)} isComponentCard={showCard} />;
			default:
				break;
		}
	};

	if (showCard) {
		return (
			<Collapse timeout="auto" in={showCard}>
				<Card onMouseLeave={() => setShowCard(false)} className={classes.bottomContainer}>
					<CardHeader
						action={
							<>
								<IconButton onClick={() => history.push("/onboarding")}>
									<Maximize2 />
								</IconButton>
								<IconButton>
									<MoreVertical />
								</IconButton>
							</>
						}
						title={
							<Typography variant="h5" color="secondary.main">
								mywebsite.com
							</Typography>
						}
						classes={{ root: classes.header }}
					/>
					<CardContent classes={{ root: classes.content }}>{getDisplayComponent()}</CardContent>
				</Card>
			</Collapse>
		);
	}
	return (
		<Collapse timeout="auto" in={!showCard}>
			{getDisplayComponent()}
		</Collapse>
	);
};

DeploymentInprogress.propTypes = {
	isComponentCard: PropTypes.bool,
	value: PropTypes.number,
	time: PropTypes.number,
	setDisplayCard: PropTypes.func,
};

DeploymentCompleted.propTypes = {
	isComponentCard: PropTypes.bool,
	setDisplayCard: PropTypes.func,
};

ResumeDeployment.propTypes = {
	isComponentCard: PropTypes.bool,
	setDisplayCard: PropTypes.func,
};
