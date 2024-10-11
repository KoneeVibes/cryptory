import { Box, Stack, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { Pyramid, Star } from "../../assets";

export const Hero = () => {
    return (
        <HeroWrapper>
            <Box
                component={"div"}
                className="subtitle-box"
                marginLeft={"auto"}
                marginRight={"auto"}
                marginBlockEnd={"1rem"}
                width={{ miniTablet: "fit-content" }}
            >
                <Typography
                    variant="h3"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={"normal"}
                    color={"#F0EEFF"}
                    textAlign={"center"}
                >
                    Be at the frontline of the <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={700}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                    >
                        Web3 revolution
                    </Typography>
                </Typography>
            </Box>
            <Typography
                variant="h1"
                fontFamily={"Gilroy"}
                fontWeight={800}
                fontSize={{ mobile: 45, tablet: 55, laptop: 65, desktop: 75, xl: 80 }}
                lineHeight={1}
                whiteSpace={"normal"}
                textAlign={"center"}
                sx={{
                    backgroundImage: "linear-gradient(to right, #FFFFFF 0%, #1757DA 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                }}
            >
                Navigating the whole web3 innovation from one app
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Manrope"}
                fontWeight={400}
                fontSize={{ mobile: 16 }}
                lineHeight={"normal"}
                whiteSpace={"normal"}
                textAlign={"center"}
                color={"#FFFFFF"}
                marginBlock={"0.5rem"}
                width={{ laptop: "70%" }}
                sx={{
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                Cryptory is a tech solution that gives you access to the most innovative tools/utilities at your fingertip as at when available.
            </Typography>
            <Stack
                className="call-to-action"
                direction={{ tablet: "row" }}
            >
                <BaseButton
                    variant="contained"
                    radius="2rem"
                    className="dashboard-button"
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Open dashboard
                    </Typography>
                </BaseButton>
                <BaseButton
                    variant="contained"
                    radius="2rem"
                    background="#000000"
                    border="1px solid #5D44DB"
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Launch App
                    </Typography>
                </BaseButton>
            </Stack>
            <Pyramid className="pyramid-icon"/>
            <Star className="star-icon"/>
        </HeroWrapper>
    )
}