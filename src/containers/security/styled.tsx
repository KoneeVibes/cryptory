import { Box, styled } from "@mui/material";

export const SecurityWrapper = styled(Box)(({ theme }) => {
    return {
        padding: "0 calc(var(--basic-padding) * 1)",
        marginBlockEnd: "var(--basic-margin)",
        "& .security-title": {
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0 calc(var(--basic-padding) * 1)",
        },
        "& .security-certificates": {
            gap: "calc(var(--flex-gap) * 1)",
            justifyContent: "space-between",
            marginBlock: "calc(var(--basic-margin) * 2)",
            "& .cert-wrapper": {
                "& svg": {
                    width: "100%",
                    height: "auto",
                }
            },
            [theme.breakpoints.up("miniTablet")]: {
                gap: "calc(var(--flex-gap) * 2)",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "0 calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 1)",
        },
    }
})