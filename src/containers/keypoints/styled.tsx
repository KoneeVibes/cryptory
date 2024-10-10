import { useContext } from "react";
import { Context } from "../../context";
import { Grid2, styled } from "@mui/material";

export const KeyPointsWrapper = styled(Grid2)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        padding: "0 var(--basic-padding)",
        marginBlock: "calc(var(--basic-margin) * 1.5)",
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        "& .key-point-card": {
            padding: "var(--basic-padding)",
            background: "#09093F",
            borderRadius: 0,
            height: "100%",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "0 calc(var(--basic-padding) * 2)",
        }
    }
})