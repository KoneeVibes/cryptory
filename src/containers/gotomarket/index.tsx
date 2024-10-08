import { Box, Stack, Typography } from "@mui/material";
import { GoToMarketWrapper } from "./styled";
import { Globe } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import { goToMarketStrategy } from "../../config";

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
            <Stack
                direction={{ laptop: "row" }}
            >
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
                {goToMarketStrategy.slice(0, 2).map((strategy, index) => {
                    return (
                        <Box
                            key={index}
                            component={"div"}
                            className="bordered-box"
                            flex={2}
                        >
                            <Stack
                                gap={"0.5rem"}
                                alignItems={"center"}
                                direction={{ mobile: "row" }}
                            >
                                {strategy.icon}
                                <Typography
                                    variant="h3"
                                    fontFamily={"Dm Sans"}
                                    fontWeight={600}
                                    fontSize={18}
                                    lineHeight={"normal"}
                                    color={"#CAD9FF"}
                                    whiteSpace={"normal"}
                                >
                                    {strategy.name}
                                </Typography>
                            </Stack>
                        </Box>
                    )
                })}
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
            </Stack>
            <Stack
                direction={{ laptop: "row" }}
            >
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
                {goToMarketStrategy.slice(2, 4).map((strategy, index) => {
                    return (
                        <Box
                            key={index}
                            component={"div"}
                            className="bordered-box"
                            flex={2}
                        >
                            <Stack
                                gap={"0.5rem"}
                                alignItems={"center"}
                                direction={{ mobile: "row" }}
                            >
                                {strategy.icon}
                                <Typography
                                    variant="h3"
                                    fontFamily={"Dm Sans"}
                                    fontWeight={600}
                                    fontSize={18}
                                    lineHeight={"normal"}
                                    color={"#CAD9FF"}
                                    whiteSpace={"normal"}
                                >
                                    {strategy.name}
                                </Typography>
                            </Stack>
                        </Box>
                    )
                })}
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
            </Stack>
            <Stack
                direction={{ laptop: "row" }}
            >
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
                {goToMarketStrategy.slice(4, 6).map((strategy, index) => {
                    return (
                        <Box
                            key={index}
                            component={"div"}
                            className="bordered-box"
                            flex={2}
                        >
                            <Stack
                                gap={"0.5rem"}
                                alignItems={"center"}
                                direction={{ mobile: "row" }}
                            >
                                {strategy.icon}
                                <Typography
                                    variant="h3"
                                    fontFamily={"Dm Sans"}
                                    fontWeight={600}
                                    fontSize={18}
                                    lineHeight={"normal"}
                                    color={"#CAD9FF"}
                                    whiteSpace={"normal"}
                                >
                                    {strategy.name}
                                </Typography>
                            </Stack>
                        </Box>
                    )
                })}
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
            </Stack>
            <Stack
                direction={{ laptop: "row" }}
            >
                <Box
                    flex={0.5}
                    padding={"calc(var(--basic-padding) * 2)"}
                    display={{ mobile: "none", laptop: "block" }}
                />
                <Box
                    component={"div"}
                    flex={4}
                    className="foot-note"
                >
                    <Typography
                        variant="h3"
                        fontFamily={"Gilroy"}
                        fontWeight={500}
                        fontSize={18}
                        lineHeight={"normal"}
                        color={"#9090CE"}
                        whiteSpace={"normal"}
                        marginBlockStart={"var(--basic-margin)"}
                    >
                        These initiatives represent just a few facets of our comprehensive marketing strategy. We will continually push and work on getting on exchanges and more as we gain more traction and users for our products and services.
                    </Typography>
                </Box>
                <Box
                    flex={0.5}
                    padding={"calc(var(--basic-padding) * 2)"}
                    display={{ mobile: "none", laptop: "block" }}
                />
            </Stack>
        </GoToMarketWrapper >
    )
}