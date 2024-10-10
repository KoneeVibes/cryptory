import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";
import bg from "../../assets/roadmapbg.svg";
import carouselbg from "../../assets/carouselbg.svg";

export const RoadmapWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(var(--basic-margin))",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        "& .roadmap-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        "& .roadmap-card": {
            padding: "var(--basic-padding)",
            backgroundColor: "#09093F",
            height: "100%",
            borderRadius: "10px",
        },
        "& .slider": {
            gap: "var(--flex-gap)",
        },
        "& .slide": {
            flex: 1,
        },
        "& .carousel-box": {
            padding: "12rem 0",
            backgroundImage: `url(${carouselbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            marginBlockStart: "var(--basic-margin)",
        },
        [theme.breakpoints.down("tablet")]: {
            marginBlockStart: 0,
        },
    }
})