import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { PrimaryButton } from "../../../../components/buttons";
import { TooltipWithArrow } from "../../../../components/tooltipWithArrow";
import { icon_cloud } from "../../../../config/Constants";

const useStyles = makeStyles((theme) => ({
	tableHeader: {
		backgroundColor: "#EFEFEF",
	},
	tableIcon: {
		width: 18,
		height: "auto",
	},
	tooltipIcon: {
		width: 25,
		height: "auto",
	},
}));

const createDnsRecordsData = (type, name, content, ttl, proxyStatus) => {
	return { type, name, content, ttl, proxyStatus };
};

const rows = [
	createDnsRecordsData("A", "blog", "104.21.48.239", "Auto", "Proxied"),
	createDnsRecordsData("A", "blog", "172.67.157.1", "Auto", "Proxied"),
	createDnsRecordsData("CNAME", "example.co", "172.67.157.1", "Auto", "DNS Only"),
];

const tableHeaders = ["Type", "Name", "Content", "TTL", "Proxy Status"];

export const UpdateDNS = () => {
	const classes = useStyles();

	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Resource DNS records
			</Typography>
			<Typography textAlign="center" maxWidth={725} mt={5} mb={8} variant="subtitle1" color="secondary.90">
				Verify DNS records below are configured right, These records take effect in Kit-Proxy after you update your A and CNAME records in respective DNS Manager.
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead classes={{ root: classes.tableHeader }}>
						<TableRow>
							{tableHeaders.map((value, index) => (
								<TableCell key={value + index}>
									<Typography variant="subtitle2" textAlign={index > 0 ? "left" : "center"}>
										{value}
									</Typography>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow key={row.name + index}>
								<TableCell component="th" scope="row">
									<Typography textAlign="center" variant="subtitle2" color="black.100">
										{row.type}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="small1" color="black.80">
										{row.name}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="small1" color="black.80">
										{row.content}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="small1" color="black.80">
										{row.ttl}
									</Typography>
								</TableCell>
								<TableCell>
									{row.proxyStatus === "Proxied" ? (
										<Box display="flex" alignItems="center">
											<img className={classes.tableIcon} src={icon_cloud} alt="cloud icon" />
											<TooltipWithArrow
												tooltipContent={
													<Box display="flex" alignItems="center">
														<img className={classes.tooltipIcon} src={icon_cloud} alt="cloud icon" />
														<Typography ml={1} variant="body2" color="black.80">
															Accelerates and protects traffic
														</Typography>
													</Box>
												}
												placement="right"
											>
												<Typography component="span" ml={1} variant="small1" color="black.80">
													{row.proxyStatus}
												</Typography>
											</TooltipWithArrow>
										</Box>
									) : (
										<Typography variant="small1" color="black.80">
											{row.proxyStatus}
										</Typography>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<PrimaryButton sx={{ mt: "48px !important" }} btnWidth={350} variant="contained">
				START VERIFICATION
			</PrimaryButton>
		</>
	);
};
