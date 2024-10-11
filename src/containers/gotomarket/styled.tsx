import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";
import bg from "../../assets/corevaluesbg.svg";

export const GoToMarketWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "var(--basic-margin)",
        overflow: "hidden",
        "& .go-to-market-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        "& .go-to-market-strategy": {
            borderRadius: "28px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            overflow: "hidden",
            padding: "calc(var(--basic-padding) * 1)",
            border: "1px solid #5D44DB50",
            margin: "calc(var(--basic-margin) * 1)",
            [theme.breakpoints.up("tablet")]: {
                margin: "var(--basic-margin) calc(var(--basic-margin) * 2) calc(var(--basic-margin) * 2)",
            },
            [theme.breakpoints.up("laptop")]: {
                flexDirection: "row",
                gap: "calc(var(--flex-gap) * 3)",
                alignItems: "center",
                padding: "calc(var(--basic-padding) * 2)",
            }
        },
        "& .text-area": {
            flex: 1,
            overflow: "hidden"
        },
        "& .animation-area": {
            flex: 1,
            overflow: "hidden",
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },
        "& .bordered-box": {
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #AAC3FF50 0%, #81A5FF50 10%) 1",
            padding: "calc(var(--basic-padding) * 2)",
        },
        "& .foot-note": {
            [theme.breakpoints.down("laptop")]: {
                padding: "0 calc(var(--basic-padding) * 2)",
            },
            [theme.breakpoints.down("tablet")]: {
                padding: "0 calc(var(--basic-padding) * 1)",
            },
        }
    }
})