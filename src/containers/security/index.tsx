import { Box, Stack, Typography } from "@mui/material";
import { SecurityWrapper } from "./styled";
import { AssureDefi, BlockSafu, SPCert } from "../../assets";

export const Security = () => {
    return (
        <SecurityWrapper>
            <Box
                component={"div"}
                className="security-title"
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Gilroy"}
                    fontWeight={800}
                    fontSize={{ mobile: 30, tablet: 40, desktop: 50 }}
                    lineHeight={"normal"}
                    textAlign={"center"}
                    marginBlockEnd={"calc(var(--basic-margin)/6)"}
                    whiteSpace={"normal"}
                    sx={{
                        backgroundImage: "linear-gradient(to right, #FFFFFF 0%, #1757DA 100%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                    }}
                >
                    Security
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Dm Sans"}
                    fontWeight={400}
                    fontSize={{ mobile: 18 }}
                    lineHeight={"normal"}
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    color="#9090CE"
                >
                    We are proud to announce that we have been fully KYC verified by the trusted:
                </Typography>
            </Box>
            <Stack
                className="security-certificates"
                direction={{ miniTablet: "row" }}
            >
                <AssureDefi />
                <BlockSafu />
                <SPCert />
            </Stack>
        </SecurityWrapper>
    )
}