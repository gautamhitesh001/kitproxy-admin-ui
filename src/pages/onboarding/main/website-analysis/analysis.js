import { Divider, Grid, IconButton, InputAdornment, Paper, Skeleton, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { Edit } from "react-feather";
import { CustomButton } from "../../../../components/custom-button";

const useStyles = makeStyles((theme) => ({
	websiteInput: {
		width: 350,
		"& fieldset": {
			borderColor: theme.palette.black["10"] + " !important",
		},
		"& label": {
			color: "#4f4f4f !important",
		},
	},
	reportContainer: {
		width: "100%",
		borderRadius: 4,
		backgroundColor: theme.palette.black["5"],
		padding: "48px 32px 32px 32px",
	},
	tableContainer: {
		backgroundColor: theme.palette.black["5"] + " !important",
		border: "1px solid #DBDDE0",
		borderRadius: "10px !important",
		marginTop: 10,
	},
	settingsContainer: {
		backgroundColor: "#3A4554 !important",
		border: "1px solid #DBDDE0",
		borderRadius: "10px !important",
		marginTop: 10,
	},
	tableRow: {
		padding: 20,
	},
	skeleton: {
		backgroundColor: "#c4c4c4 !important",
		borderRadius: 10,
		width: "50%",
		marginLeft: "auto",
		marginRight: "auto",
		height: "22px !important",
	},
	dividerDark: {
		borderColor: "rgba(0, 0, 0, 0.08) !important",
	},
}));

export const AnalysisSection = ({ rows }) => {
	const classes = useStyles();

	const [isDataLoading, setIsDataLoading] = useState(true);
	const [isUrlEditable, setIsUrlEditable] = useState(true);
	const [websiteUrl, setWebsiteUrl] = useState("mywebsite.com");

	const handleMouseDown = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<Box mt={8} />
			<TextField
				id="url"
				label="Website URL"
				variant="outlined"
				size="small"
				focused
				disabled={isUrlEditable}
				value={websiteUrl}
				width={350}
				classes={{ root: classes.websiteInput, focused: classes.websiteInput }}
				onChange={(e) => setWebsiteUrl(e.target.value)}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={() => setIsUrlEditable(!isUrlEditable)} onMouseDown={handleMouseDown} edge="end">
								<Edit />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Typography mt={12} variant="h3" color="secondary.main">
				Your web vital report is ready
			</Typography>
			<Box className={classes.reportContainer} mt={8}>
				<Typography variant="h5" color="secondary.main" textAlign="center">
					Web Vitals Report for mywebsite.com
				</Typography>
				<Grid mt={6} container direction="row" spacing={2}>
					<Grid container item xs={8}>
						<Grid item xs={6}>
							<Typography pl={2} variant="subtitle2" color="secondary.80">
								Web vitals
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="subtitle2" color="secondary.80" textAlign="center">
								Current status
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Paper elevation={0} className={classes.tableContainer}>
								{rows.map((value, index) => (
									<>
										<Grid className={classes.tableRow} container direction="row" key={value.vital + index}>
											<Grid item xs={6}>
												<Typography variant="body2">{value.vital}</Typography>
											</Grid>
											<Grid item xs={6}>
												{isDataLoading ? (
													<Skeleton className={classes.skeleton} variant="rectangular" />
												) : (
													<Typography textAlign="center" variant="body2" color={value.isError ? "error.main" : "success.main"}>
														{value.stat}
													</Typography>
												)}
											</Grid>
										</Grid>
										{index < rows.length - 1 ? <Divider /> : null}
									</>
								))}
							</Paper>
						</Grid>
					</Grid>
					<Grid item container xs={4}>
						<Grid item xs={12}>
							<Typography variant="subtitle2" color="secondary.80" textAlign="center">
								Recommended Settings
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Paper elevation={0} className={classes.settingsContainer}>
								{rows.map((value, index) => (
									<>
										<Grid className={classes.tableRow} container direction="row" key={value.vital + index}>
											<Grid item xs={12}>
												{isDataLoading ? (
													<Skeleton className={classes.skeleton} variant="rectangular" />
												) : (
													<Typography textAlign="center" variant="body2" color="common.white">
														{value.setting}
													</Typography>
												)}
											</Grid>
										</Grid>
										{index < rows.length - 1 ? <Divider classes={{ root: classes.dividerDark }} /> : null}
									</>
								))}
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			{!isDataLoading ? (
				<CustomButton sx={{ mt: "80px !important" }} btnWidth={350} variant="contained">
					CONTINUE
				</CustomButton>
			) : null}
		</>
	);
};

AnalysisSection.propTypes = {
	rows: PropTypes.array,
};
