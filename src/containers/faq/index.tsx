import { useEffect } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FaqWrapper } from "./styled";
import { qanda } from "../../config";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Faq = () => {
    useEffect(() => {
        const toggleButtons = Array.from(document.getElementsByClassName("toggle-button")) as HTMLElement[];
        const toggleOpenButtons = Array.from(document.getElementsByClassName("toggle-open-icon")) as HTMLElement[];
        const toggleCloseButtons = Array.from(document.getElementsByClassName("toggle-close-icon")) as HTMLElement[];
        const answers = Array.from(document.getElementsByClassName("faq-answer-box")) as HTMLElement[];
        //default to display the first answer
        answers[0].classList.add("show");
        toggleOpenButtons[0].classList.add("show");
        toggleCloseButtons[0].classList.add("hide");
        toggleButtons.forEach((toggleButton, i) => {
            toggleButton.addEventListener("click", function () {
                answers.forEach((answer) => {
                    answer.classList.remove("show");
                });
                toggleOpenButtons.forEach((openButton) => {
                    openButton.classList.remove("show");
                });
                toggleCloseButtons.forEach((closeButton) => {
                    closeButton.classList.remove("hide");
                })
                answers[i].classList.add("show");
                toggleOpenButtons[i].classList.add("show");
                toggleCloseButtons[i].classList.add("hide");
            })
        });
    }, []);
    return (
        <FaqWrapper
            id="faq"
        >
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="faq-title"
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
                    Got questions about Cryptory? We've got answers. Dive into our FAQ section to learn more.
                </Typography>
            </Box>
            <Box
                component={"div"}
                className="faq-qanda"
            >
                {qanda.map((entry, index) => {
                    return (
                        <Box
                            key={index}
                            component={motion.div}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                        >
                            <Stack
                                component={motion.div}
                                variants={item}
                                direction={{ mobile: "row" }}
                                className="faq-question-stack"
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 19 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="#306CFE"
                                >
                                    {entry.question}
                                </Typography>
                                <IconButton
                                    className="toggle-button"
                                >
                                    <RemoveOutlinedIcon className="toggle-open-icon" />
                                    <AddOutlinedIcon className="toggle-close-icon" />
                                </IconButton>
                            </Stack>
                            <Box
                                component={motion.div}
                                variants={item}
                                className="faq-answer-box"
                            >
                                <Typography
                                    variant="body1"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 16 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="#FFFFFF99"
                                >
                                    {entry.answer}
                                </Typography>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </FaqWrapper>
    )
}