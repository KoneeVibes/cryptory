import { useContext } from "react";
import { Context } from "../../context";
import { Box, styled } from "@mui/material";
import bgImage from "../../assets/herobg.svg";

export const HeroWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        padding: "calc(var(--basic-padding) * 2) var(--basic-padding)",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        overflow: "hidden",
        "& .subtitle-box": {
            border: "1px solid #5D44DB",
            borderRadius: "20px",
            padding: "0.5rem",
        },
        "& .dashboard-button": {
            background: "linear-gradient(to right, #5D44DB 0%, #8E61FF 34%)",
        },
        "& .call-to-action": {
            gap: "calc(var(--flex-gap)/2)",
            padding: "calc(var(--basic-padding) * 1.5) 0",
            justifyContent: "center",
            overflow: "hidden",
            [theme.breakpoints.down("tablet")]: {
                paddingBottom: "0.5rem",
            }
        },
        "& .pyramid-icon": {
            position: "absolute",
            top: "30%",
            left: 0,
            transformStyle: "preserve-3d",
            animation: "spin 5s linear infinite",
            [theme.breakpoints.down("tablet")]: {
                display: "none",
            }
        },
        "& .star-icon": {
            position: "absolute",
            top: "20%",
            right: 0,
            transformStyle: "preserve-3d",
            animation: "spin 5s linear infinite",
            [theme.breakpoints.down("tablet")]: {
                display: "none",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2)",
        }
    }
})