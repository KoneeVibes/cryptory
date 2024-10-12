import { Box, Stack, Typography } from "@mui/material";
import { SecurityWrapper } from "./styled";
import { AssureDefi, BlockSafu, SPCert } from "../../assets";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Security = () => {
    return (
        <SecurityWrapper>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="security-title"
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
            >
                <Typography
                    component={motion.h2}
                    variants={item}
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
                    component={motion.p}
                    variants={item}
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
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <motion.div
                    variants={item}
                    className="cert-wrapper"
                >
                    <AssureDefi />
                </motion.div>
                <motion.div
                    variants={item}
                    className="cert-wrapper"
                >
                    <BlockSafu />
                </motion.div>
                <motion.div
                    variants={item}
                    className="cert-wrapper"
                >
                    <SPCert />
                </motion.div>
            </Stack>
        </SecurityWrapper>
    )
}