import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const RoadmapWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(var(--basic-margin))",
        "& .roadmap-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        [theme.breakpoints.down("tablet")]: {
            marginBlockStart: 0,
        },
    }
})