import { Box, styled } from "@mui/material";

export const FaqWrapper = styled(Box)(({ theme }) => {
    return {
        "& .faq-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
    }
})