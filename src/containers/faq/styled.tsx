import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const FaqWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(var(--basic-margin) * 2)",
        "& .faq-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        "& .faq-qanda": {
            padding: "calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        "& .faq-question-stack": {
            gap: "var(--flex-gap)",
            padding: "var(--basic-padding)",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            backgroundColor: "#09093F",
            borderRadius: "10px",
            border: "1px solid #FFFFFF14"
        },
        "& .faq-answer-box": {
            display: "none",
            padding: "var(--basic-padding)",
        },
        "& .faq-answer-box.show": {
            display: "block",
        },
        "& .toggle-open-icon": {
            display: "none",
        },
        "& .toggle-open-icon.show": {
            display: "block",
            color: "#306CFE",
            border: "1px solid #306CFE",
            borderRadius: "100%",
            padding: "0.5rem"
        },
        "& .toggle-close-icon": {
            color: "#FFFFFF",
            border: "1px solid #FFFFFF14",
            borderRadius: "100%",
            padding: "0.5rem"
        },
        "& .toggle-close-icon.hide": {
            display: "none",
        }
    }
})