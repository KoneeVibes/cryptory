import { Box, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { mainusecases } from "../../config";
import { UseCasesWrapper } from "./styled";
import { Helix } from "../../assets";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const UseCases = () => {
    return (
        <UseCasesWrapper
            id="usecases"
        >
            <Box
                className="use-case-title"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    component={motion.h2}
                    variants={item}
                    fontFamily={"Gilroy"}
                    fontWeight={600}
                    fontSize={{ mobile: 30, tablet: 40, desktop: 50 }}
                    lineHeight={"normal"}
                    textAlign={"center"}
                    marginBlockEnd={"calc(var(--basic-margin)/6)"}
                    sx={{
                        backgroundImage: "linear-gradient(to right, #FFFFFF 0%, #1757DA 100%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                    }}
                >
                    MAIN USE CASES
                </Typography>
            </Box>
            <Grid2
                container
                spacing={3}
                overflow={"hidden"}
            >
                {mainusecases.map((usecase, index) => {
                    return (
                        <Grid2
                            className="grid-item"
                            size={{ mobile: 12, tablet: 6 }}
                        >
                            <Card
                                key={index}
                                className="use-case-card"
                                component={motion.div}
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                            >
                                <CardMedia
                                    component={"img"}
                                    height="182"
                                    image={usecase.thumbnail}
                                    sx={{ borderRadius: "1rem" }}
                                />
                                <CardContent>
                                    <Typography
                                        component={motion.h2}
                                        variants={item}
                                        fontFamily={"Gilroy"}
                                        fontWeight={600}
                                        fontSize={{ mobile: 30 }}
                                        lineHeight={"normal"}
                                        color="#FFFFFF"
                                        marginBlock={"calc(var(--basic-margin)/2)"}
                                        whiteSpace={"normal"}
                                    >
                                        {usecase.title}
                                    </Typography>
                                    <Typography
                                        component={motion.p}
                                        variants={item}
                                        fontFamily={"Manrope"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 15 }}
                                        lineHeight={"normal"}
                                        color="#9090CE"
                                        marginBlock={"calc(var(--basic-margin)/2)"}
                                        whiteSpace={"normal"}
                                    >
                                        {usecase.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    )
                })}
            </Grid2>
            <Helix className="helix-icon" />
        </UseCasesWrapper >
    )
}