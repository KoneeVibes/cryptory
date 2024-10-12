import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { FooterWrapper } from "./styled";
import { Favicon } from "../../assets";
import { footerLinks, socialMediaIcons } from "../../config";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";
import { BaseButton } from "../../components/button/styled";
import { Telegram } from "@mui/icons-material";

export const Footer = () => {
    const matches = useMediaQuery('(max-width:280px)');
    return (
        <FooterWrapper
            id="footer"
        >
            <Stack
                className="top-layer"
                direction={{ laptop: "row" }}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    flex={0.5}
                    overflow={"hidden"}
                    component={motion.div}
                    variants={item}
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
                    <BaseButton
                        variant="contained"
                        background="#2D37A4"
                        startIcon={<Telegram sx={{ background: "#24A1DE", borderRadius: "50%", padding: "0.5rem" }} />}
                        sx={{
                            width: matches ? "100%" : "auto"
                        }}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"uppercase"}
                        >
                            USE IT ON <br />
                            <Typography
                                variant="button"
                                fontFamily={"inherit"}
                                fontWeight={400}
                                fontSize={"14px"}
                                lineHeight={"inherit"}
                                color={"inherit"}
                                textTransform={"capitalize"}
                            >
                                Telegram
                            </Typography>
                        </Typography>
                    </BaseButton>
                </Box>
                <Box
                    flex={0.25}
                    component={motion.div}
                    variants={item}
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
                    <Stack
                        component={motion.div}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                    >
                        {footerLinks.quickLinks.map((quickLink, index) => {
                            return (
                                <Typography
                                    key={index}
                                    component={motion.p}
                                    variants={item}
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
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant="subtitle1"
                        component={motion.div}
                        variants={item}
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
                    <Stack
                        component={motion.div}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                    >
                        {footerLinks.support.map((support, index) => {
                            return (
                                <Typography
                                    key={index}
                                    component={motion.div}
                                    variants={item}
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
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    component={motion.div}
                    variants={item}
                >
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
                    component={motion.div}
                    variants={item}
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