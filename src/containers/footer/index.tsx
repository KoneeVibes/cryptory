import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FooterWrapper } from "./styled";
import { Favicon } from "../../assets";
import { footerLinks, socialMediaIcons } from "../../config";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Stack
                className="top-layer"
                direction={{ laptop: "row" }}
            >
                <Box
                    flex={0.5}
                    overflow={"hidden"}
                >
                    <Favicon />
                    <Typography
                        variant="body1"
                        fontFamily={"Dm Sans"}
                        fontWeight={400}
                        fontSize={{ mobile: 18 }}
                        lineHeight={"normal"}
                        marginBlock={"calc(var(--basic-margin))"}
                        whiteSpace={"normal"}
                        color="#FFFFFF60"
                    >
                        Cryptory is the first Multi Industry AI Website Builder powered entirely through Telegram.
                    </Typography>
                </Box>
                <Box
                    flex={0.25}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={600}
                        fontSize={{ mobile: 20 }}
                        lineHeight={"normal"}
                        marginBlock={"calc(var(--basic-margin))"}
                        whiteSpace={"normal"}
                        color="#FFFFFF"
                    >
                        Quick Links
                    </Typography>
                    <Stack>
                        {footerLinks.quickLinks.map((quickLink, index) => {
                            return (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    fontFamily={"Dm Sans"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 18 }}
                                    lineHeight={"normal"}
                                    marginBlock={"calc(var(--basic-margin) / 4)"}
                                    whiteSpace={"normal"}
                                    color="#FFFFFF60"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {quickLink.name}
                                </Typography>
                            )
                        })}
                    </Stack>
                </Box>
                <Box
                    flex={0.25}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={600}
                        fontSize={{ mobile: 20 }}
                        lineHeight={"normal"}
                        marginBlock={"calc(var(--basic-margin))"}
                        whiteSpace={"normal"}
                        color="#FFFFFF"
                    >
                        Support
                    </Typography>
                    <Stack>
                        {footerLinks.support.map((support, index) => {
                            return (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    fontFamily={"Dm Sans"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 18 }}
                                    lineHeight={"normal"}
                                    marginBlock={"calc(var(--basic-margin) / 4)"}
                                    whiteSpace={"normal"}
                                    color="#FFFFFF60"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {support.name}
                                </Typography>
                            )
                        })}
                    </Stack>
                </Box>
            </Stack>
            <Stack
                className="bottom-layer"
                direction={{ tablet: "row" }}
            >
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Dm Sans"}
                        fontWeight={400}
                        fontSize={{ mobile: 18 }}
                        lineHeight={"normal"}
                        marginBlock={"calc(var(--basic-margin) / 4)"}
                        whiteSpace={"normal"}
                        color="#FFFFFF60"
                    >
                        © 2023 All Rights Reserved By <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={600}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"#7B7BFF"}
                        >
                            Cryptory
                        </Typography>
                    </Typography>
                </Box>
                <Stack
                    direction={{ mobile: "row" }}
                    className="social-media-icons"
                >
                    {socialMediaIcons.map((mediaIcon, index) => {
                        return (
                            <IconButton
                                key={index}
                                sx={{
                                    border: "1px solid #FFFFFF14",
                                    height: "fit-content"
                                }}
                                onClick={() => window.open(mediaIcon.url, '_blank')}
                            >
                                {mediaIcon.icon}
                            </IconButton>
                        )
                    })}
                </Stack>
            </Stack>
        </FooterWrapper>
    )
}