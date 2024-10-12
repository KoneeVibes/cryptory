import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { TeamWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import { team } from "../../config";
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const Team = () => {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <TeamWrapper>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="team-title"
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
                    OUR TEAM
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
                    {team.map((member, index) => {
                        return (
                            <Card
                                key={index}
                                className="team-card"
                            >
                                {member.icon}
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 28, laptop: 42 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="#FFFFFF"
                                    textAlign={"left"}
                                    marginBlock={"1rem"}
                                >
                                    {member.title}
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
                                    {member.body}
                                </Typography>
                            </Card>
                        )
                    })}
                </Carousel>
            </Box>
        </TeamWrapper>
    )
}