import { Box, Typography } from "@mui/material";
import { FaqWrapper } from "./styled";

export const Faq = () => {
    return (
        <FaqWrapper>
            <Box
                component={"div"}
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="faq-title"
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
                    Frequently  <Typography
                        component={"span"}
                        color={"#FFFFFF"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        sx={{
                            backgroundImage: "none",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                        }}
                    >
                        Asked Questions
                    </Typography>
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
                    Got questions about Cryptory? We've got answers. Dive into our FAQ section to learn more.
                </Typography>
            </Box>
        </FaqWrapper>
    )
}