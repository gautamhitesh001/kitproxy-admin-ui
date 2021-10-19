import { CircularProgress, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { Check } from "react-feather";
import { icon_cloud, icon_cloud_dull } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
    },
    dataStack: { marginTop: 20 },
    listItem: {
        width: "100%",
    },
    rowItem: {
        flex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
    },
    statusWrapper: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 30,
    },
    cloudIcon: {
        width: 18,
        height: "auto",
    },
}));

export const DnsStatusTable = ({ rowData }) => {
    const classes = useStyles();

    const getDisplayValues = (obj) => {
        let tempObj = { ...obj };
        delete tempObj.isCompleted;
        delete tempObj.isInprogress;

        return { ...tempObj };
    };

    return (
        <Stack className={classes.container} spacing={0}>
            <Typography component="p" textAlign="right" variant="initial" color="primary.main">
                Verifying 10 of 21
            </Typography>
            <Stack spacing={1} className={classes.dataStack}>
                {rowData.map((val, index) => {
                    const displayValues = getDisplayValues(val);
                    return (
                        <Paper className={classes.listItem} key={index + val.content} elevation={val.isInprogress ? 4 : 0}>
                            <Stack direction="row">
                                {Object.keys(displayValues).map((key, keyIndex) => (
                                    <Box key={key + keyIndex} className={classes.rowItem}>
                                        {key === "proxyStatus" && displayValues[key] === "Proxied" ? (
                                            <Box display="flex" alignItems="center">
                                                <img className={classes.cloudIcon} src={val.isInprogress ? icon_cloud : icon_cloud_dull} alt="cloud icon" />
                                                <Typography component="span" ml={1} variant="small1" color={val.isInprogress ? "common.black" : "black.40"}>
                                                    {displayValues[key]}
                                                </Typography>
                                            </Box>
                                        ) : (
                                            <Typography variant="small1" color={val.isInprogress ? "common.black" : "black.40"}>
                                                {displayValues[key]}
                                            </Typography>
                                        )}
                                    </Box>
                                ))}
                                <Box className={classes.statusWrapper}>
                                    {val.isInprogress ? (
                                        <CircularProgress size={20} />
                                    ) : val.isCompleted ? (
                                        <Box color="#FAB395">
                                            <Check size={16} />
                                        </Box>
                                    ) : null}
                                </Box>
                            </Stack>
                        </Paper>
                    );
                })}
            </Stack>
        </Stack>
    );
};

DnsStatusTable.propTypes = {
    rowData: PropTypes.array,
};
