import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { RoadmapWrapper } from "./styled";
import { roadmap } from "../../config";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Roadmap = () => {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <RoadmapWrapper
            id="roadmap"
        >
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="roadmap-title"
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
                    ROADMAP
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
                    Our plans and key milestones for the next 5 phases of Cryptory
                </Typography>
            </Box>
            <Box
                className="carousel-box"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Carousel
                    autoPlay={true}
                    autoFocus={true}
                    infiniteLoop={true}
                    interval={2000}
                    emulateTouch={true}
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={matches ? 40 : 80}
                >
                    {roadmap.map((milestone, index) => {
                        return (
                            <Card
                                key={index}
                                className="roadmap-card"
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 19 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="rgba(48, 108, 254, 0.96)"
                                    textAlign={"left"}
                                >
                                    {milestone.subtitle}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 19 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="#FFFFFF"
                                    textAlign={"left"}
                                    marginBlock={"1rem"}
                                >
                                    {milestone.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 16 }}
                                    whiteSpace={"normal"}
                                    color="#FFFFFF"
                                    lineHeight={1.6}
                                    textAlign={"left"}
                                >
                                    {milestone.body}
                                </Typography>
                            </Card>
                        )
                    })}
                </Carousel>
            </Box>
        </RoadmapWrapper>
    )
}