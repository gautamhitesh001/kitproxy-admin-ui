import { Button, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { icon_github, icon_google, icon_outlook } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: "32px !important",
	},
	ctaWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 24,
	},
	btnIcon: {
		width: 110,
		height: 48,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: theme.palette.common.white,
		border: "1px solid #CACCCF !important",
	},
}));

export const ThirdPartyCTA = () => {
	const classes = useStyles();

	return (
		<>
			<Divider className={classes.divider} textAlign="center" flexItem={true}>
				<Typography variant="small3" color="black.60">
					or continue using
				</Typography>
			</Divider>
			<Box className={classes.ctaWrapper}>
				<Button className={classes.btnIcon} variant="outlined">
					<img src={icon_google} />
				</Button>
				<Button className={classes.btnIcon} sx={{ mx: 2 }} variant="outlined">
					<img src={icon_github} />
				</Button>
				<Button className={classes.btnIcon} variant="outlined">
					<img src={icon_outlook} />
				</Button>
			</Box>
		</>
	);
};
