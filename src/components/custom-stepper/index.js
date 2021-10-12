import { Step, StepConnector, StepLabel, Stepper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Check } from "react-feather";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	stepper: {
		width: 525,
	},
	stepConnector: {
		top: "20px !important ",
	},
	stepConnectorLine: {
		borderColor: "#FCD2C0 !important",
	},
	stepperLabel: {
		color: `${theme.palette.black["60"]} !important`,
	},
	activeLabel: {
		color: theme.palette.primary.main + " !important",
	},
	stepIcon: ({ active, completed }) => ({
		width: 40,
		height: 40,
		borderRadius: 20,
		border: "1px solid #FCD2C0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: active || completed ? theme.palette.primary.main : theme.palette.common.white,
		color: active || completed ? theme.palette.common.white : theme.palette.black["80"],
	}),
}));

const StepperIcon = (props) => {
	const classes = useStyles(props);
	return <Box className={classes.stepIcon}>{props.completed ? <Check /> : props.icon}</Box>;
};

export const CustomStepper = ({ activeStep, stepperLabelData }) => {
	const classes = useStyles();

	return (
		<Stepper
			alternativeLabel
			activeStep={activeStep}
			classes={{ root: classes.stepper }}
			connector={<StepConnector classes={{ root: classes.stepConnector, line: classes.stepConnectorLine }} />}
		>
			{stepperLabelData.map((label) => (
				<Step key={label}>
					<StepLabel StepIconComponent={StepperIcon} classes={{ label: classes.stepperLabel, active: classes.activeLabel, completed: classes.activeLabel }}>
						<Typography variant="small1">{label}</Typography>
					</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};

CustomStepper.propTypes = {
	activeStep: PropTypes.number,
	stepperLabelData: PropTypes.array,
};

StepperIcon.propTypes = {
	icon: PropTypes.node,
	completed: PropTypes.bool,
};
