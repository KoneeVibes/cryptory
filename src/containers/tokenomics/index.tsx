import { Box, Typography } from "@mui/material";
import { TokenomicsWrapper } from "./styled";

export const Tokenomics = () => {
    return (
        <TokenomicsWrapper>
            <Box
                component={"div"}
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="tokenomics-title"
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
                    Tokenomics
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
                    Innovative tools/utilities at your fingertip.
                </Typography>
            </Box>
        </TokenomicsWrapper>
    )
}