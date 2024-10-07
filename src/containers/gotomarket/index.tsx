import { Box, Stack, Typography } from "@mui/material";
import { GoToMarketWrapper } from "./styled";
import { Globe } from "../../assets";
import { BaseButton } from "../../components/button/styled";

export const GoToMarket = () => {
    return (
        <GoToMarketWrapper>
            <Box
                component={"div"}
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="go-to-market-title"
            >
                <Typography
                    variant="h2"
                    fontFamily={"Gilroy"}
                    fontWeight={600}
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
                    GO-TO-MARKET STRATEGY
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
            <Stack
                className="go-to-market-strategy"
            >
                <Box
                    component={"div"}
                    className="text-area"
                >
                    <BaseButton
                        radius="2rem"
                        background="#2D37A4"
                        variant="contained"
                    >
                        <Typography
                            variant={"button"}
                            fontFamily={"Dm Sans"}
                            fontWeight={400}
                            fontSize={14}
                            lineHeight={"inherit"}
                            color={"#8B8ED0"}
                            textTransform={"inherit"}
                        >
                            Go-To-Market Strategy
                        </Typography>
                    </BaseButton>
                    <Typography
                        variant="body1"
                        fontFamily={"Dm Sans"}
                        fontWeight={400}
                        fontSize={18}
                        lineHeight={"normal"}
                        color={"#9090CE"}
                        whiteSpace={"normal"}
                        marginBlockStart={"var(--basic-margin)"}
                    >
                        Cryptory is committed to ensuring widespread adoption of our cutting-edge utilities aggregator/marketplace. Our user-friendly platform is backed by a robust marketing campaign designed to reach users worldwide and we are willing to share referral income to people who promote this to their user-base.
                    </Typography>
                </Box>
                <Box
                    component={"div"}
                    className="animation-area"
                >
                    <Globe />
                </Box>
            </Stack>
        </GoToMarketWrapper >
    )
}