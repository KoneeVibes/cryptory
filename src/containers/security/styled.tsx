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
            marginBlockStart: "var(--basic-margin)",
            "& svg": {
                flex: 1,
                width: "100%",
                height: "auto",
            },
            [theme.breakpoints.up("miniTablet")]: {
                gap: "calc(var(--flex-gap) * 2)",
                "& svg": {
                    width: "auto",
                },
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "0 calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 1)",
        },
    }
})