import { List, ListItemButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
import { icon_play } from "../../../config/Constants";
import { DashboardLayout } from "../../../layouts/dashboard";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#FFFFFF",
        flexGrow: 1,
        height: "calc(100%-250px)",
        overflowY: "auto",
        display: "flex",
    },
    menuWrapper: {
        width: 400,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        paddingTop: 20,
    },
    menuItem: {
        paddingLeft: "36px !important",
        paddingRight: "36px !important",
        marginBottom: "8px !important",
    },
    selectedMenuItem: {
        paddingLeft: "42px !important",
        background: "rgba(196, 196, 196, 0.14) !important",
    },
    contentWrapper: {
        flexGrow: 1,
        paddingTop: 30,
        paddingLeft: 40,
        paddingRight: 40,
    },
}));

const createDocumentationList = (key, title, content) => {
    return { key, title, content };
};

export const DashboardDocumentation = () => {
    const classes = useStyles();
    const [menuList, setMenuList] = useState([
        createDocumentationList(1, "Getting Started", null),
        createDocumentationList(2, "Get the Big Picture", null),
        createDocumentationList(3, "Check your site’s performance", null),
        createDocumentationList(4, "Find ways to boost your performance", null),
        createDocumentationList(5, "Fix Performance Issues", null),
        createDocumentationList(6, "Troubleshoot errors", null),
        createDocumentationList(7, "Monitor Application Performance", null),
        createDocumentationList(8, "Optimize for browsers", null),
    ]);
    const [activeKey, setActiveKey] = useState(1);

    return (
        <DashboardLayout>
            <Typography variant="h4" color="secondary.main" mb={3}>
                Make the most out of your Dashboard
            </Typography>
            <Box className={classes.container}>
                <Box className={classes.menuWrapper}>
                    <List>
                        {menuList.map((val, index) => (
                            <ListItemButton
                                disableRipple
                                disableTouchRipple
                                key={val.key + index}
                                classes={{ root: classes.menuItem, selected: classes.selectedMenuItem }}
                                selected={val.key === activeKey}
                                onClick={() => setActiveKey(val.key)}
                            >
                                {val.key === activeKey ? <img src={icon_play} alt="play" /> : null}
                                <Typography ml={val.key === activeKey ? 1 : 0} fontWeight={val.key === activeKey ? 700 : 400} color="secondary.main">
                                    {val.title}
                                </Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
                <Box className={classes.contentWrapper}>
                    <Box maxWidth={650}>
                        <Typography fontWeight={700} color="secondary.main">
                            Check your site’s performance
                        </Typography>
                        <Typography mt={2} color="secondary.main">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                            randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                            embarrassing hidden in the middle of text.
                        </Typography>
                        <Typography mt={3} fontWeight={700} color="secondary.main">
                            Widget Summary
                        </Typography>
                        <Typography mt={3} fontWeight={700} color="secondary.main">
                            Page Requests
                        </Typography>
                        <Typography mt={3} fontWeight={700} color="secondary.main">
                            Page Load Time
                        </Typography>
                        <Typography mt={2} color="secondary.main">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </DashboardLayout>
    );
};
