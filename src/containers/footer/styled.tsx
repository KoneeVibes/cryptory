import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const FooterWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        padding: "0 calc(var(--basic-padding) * 1)",
        "& .top-layer": {
            gap: "calc(var(--flex-gap) * 2)",
            paddingBottom: "var(--basic-padding)",
            borderBottom: "1px solid #FFFFFF10",
            [theme.breakpoints.down("laptop")]: {
                gap: 0,
            },
        },
        "& .bottom-layer": {
            gap: "var(--flex-gap)",
            justifyContent: "space-between",
            padding: "var(--basic-padding) 0",
            "& .social-media-icons": {
                gap: "calc(var(--flex-gap)/4)",
                flexWrap: "wrap",
                overflow: "hidden",
                "& svg": {
                    color: "#FFFFFF"
                },
            },
            [theme.breakpoints.up("tablet")]: {
                alignItems: "center",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
        },
    }
})