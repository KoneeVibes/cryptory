import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const MarqueeWrapper = styled(Box)(() => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        padding: "var(--basic-padding) 0",
        "& .rfm-marquee": {
            alignItems: "center",
        },
        "& .rfm-child": {
            marginLeft: "2rem",
        }
    }
})