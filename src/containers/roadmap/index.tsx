import { Box, Typography } from "@mui/material";
import { RoadmapWrapper } from "./styled";
import Marquee from "react-fast-marquee";

export const Roadmap = () => {
    return (
        <RoadmapWrapper>
            <Box
                component={"div"}
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="roadmap-title"
            >
                <Typography
                    variant="h2"
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
                    variant="body1"
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
            <Box>
                <Marquee
                    autoFill={true}
                >
                    {/* {brands.map((brand, index) => {
                        return (
                            <Fragment key={index}>
                                {brand.icon}
                            </Fragment>
                        )
                    })} */}
                </Marquee>
            </Box>
        </RoadmapWrapper>
    )
}