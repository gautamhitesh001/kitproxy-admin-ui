import { LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { findIndex } from "lodash";
import { useState } from "react";
import { DnsStatusTable } from "../../../../components/dnsStatusTable";

const useStyles = makeStyles((theme) => ({
	progress: {
		height: "10px !important",
		borderRadius: 5,
		width: 375,
		marginTop: 40,
		marginBottom: 75,
	},
	bar: {
		borderRadius: 5,
	},
}));

const createDnsRecordsData = (type, name, content, ttl, proxyStatus, isCompleted, isInprogress) => {
	return { type, name, content, ttl, proxyStatus, isCompleted, isInprogress };
};

const rows = [
	createDnsRecordsData("A", "blog", "104.21.48.239", "Auto", "Proxied", true, false),
	createDnsRecordsData("A", "blog", "172.67.157.1", "Auto", "Proxied", true, false),
	createDnsRecordsData("CNAME", "example.co", "172.67.157.1", "Auto", "DNS Only", false, true),
	createDnsRecordsData("A", "blog", "172.67.157.1", "Auto", "Proxied", false, false),
	createDnsRecordsData("CNAME", "example.co", "172.67.157.1", "Auto", "DNS Only", false, false),
	createDnsRecordsData("A", "blog", "172.67.157.1", "Auto", "Proxied", false, false),
	createDnsRecordsData("CNAME", "example.co", "172.67.157.1", "Auto", "DNS Only", false, false),
	createDnsRecordsData("A", "blog", "172.67.157.1", "Auto", "Proxied", false, false),
	createDnsRecordsData("CNAME", "example.co", "172.67.157.1", "Auto", "DNS Only", false, false),
];

export const VerifyDNS = () => {
	const classes = useStyles();
	const [dnsRows, setDnsRows] = useState([...rows]);

	const getActiveDnsRecords = () => {
		let focusedElement = findIndex(dnsRows, { isInprogress: true });
		let recordsLength = dnsRows.length;
		if (focusedElement === 0) {
			return [dnsRows[0], dnsRows[1], dnsRows[2]];
		} else if (focusedElement === recordsLength - 1) {
			return [dnsRows[recordsLength - 3], dnsRows[recordsLength - 2], dnsRows[recordsLength - 1]];
		} else {
			return [dnsRows[focusedElement - 1], dnsRows[focusedElement], dnsRows[focusedElement + 1]];
		}
	};

	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Verifying DNS
			</Typography>
			<Typography mt={2} variant="subtitle1" color="secondary.90">
				Please wait while we verify your DNS records. This might take few minutes.
			</Typography>
			<LinearProgress variant="determinate" value={80} color="primary" classes={{ root: classes.progress, bar: classes.bar }} />
			<DnsStatusTable rowData={getActiveDnsRecords()} />
		</>
	);
};
