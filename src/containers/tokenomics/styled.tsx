import { Box, styled } from "@mui/material";

export const TokenomicsWrapper = styled(Box)(({ theme }) => {
    return {
        marginBlock: "var(--basic-margin)",
        "& .tokenomics-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
        },
        "& .bordered-box": {
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #AAC3FF50 0%, #81A5FF50 10%) 1",
            padding: "calc(var(--basic-padding) * 2)",
        },
        "& .tokenomics-subsection": {
            flexDirection: "row",
            justifyContent: "center",
            padding: "calc(var(--basic-padding) * 1)",
            [theme.breakpoints.up("tablet")]: {
                "& .underline": {
                    marginTop: "auto",
                    marginBottom: "auto",
                    height: 0,
                    minWidth: "5.5rem",
                    border: "1px solid transparent",
                    borderImage: "linear-gradient(to right, #6E98FF 0%, #9099FF 100%) 1",
                },
                padding: "calc(var(--basic-padding) * 2)",
            },
        }
    }
})