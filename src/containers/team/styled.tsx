import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";
import bg from "../../assets/teambg.svg";

export const TeamWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(var(--basic-margin))",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        "& .team-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        "& .team-card": {
            padding: "var(--basic-padding)",
            height: "100%",
            borderRadius: "10px",
            backgroundColor: "transparent",
            border: "1px solid #81A5FF",
            "& svg": {
                display: "block",
                marginRight: "auto",
            },
            [theme.breakpoints.up("laptop")]: {
                minHeight: "38.75rem",
            }
        },
        "& .slider": {
            gap: "var(--flex-gap)",
        },
        "& .slide": {
            flex: 1,
        },
        [theme.breakpoints.down("tablet")]: {
            marginBlockStart: 0,
            "& .carousel-box": {
                marginBlockStart: "2rem"
            }
        },
    }
})