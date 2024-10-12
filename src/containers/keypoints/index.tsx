import { Card, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { pointers } from "../../config";
import { KeyPointsWrapper } from "./styled";
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { container, item } from "../../configs/verticalSlideIn";

export const KeyTargets = () => {
    return (
        <KeyPointsWrapper
            container
            spacing={1}
        >
            {pointers.map((pointer, index) => {
                return (
                    <Grid
                        component={motion.div}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        size={{ mobile: 12, tablet: 6, desktop: 3 }}
                        sx={{ overflow: "hidden", height: "auto" }}
                    >
                        <Card
                            key={index}
                            component={motion.div}
                            variants={item}
                            className="key-point-card"
                        >
                            <CountUp
                                end={pointer.count}
                                enableScrollSpy={true}
                                separator=""
                                suffix="+"
                            >
                                {({ countUpRef }) => (
                                    <Typography
                                        ref={countUpRef}
                                        variant="h3"
                                        fontFamily={"Gilroy"}
                                        fontWeight={500}
                                        fontSize={32}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                    />
                                )}
                            </CountUp>
                            <Typography
                                variant="body1"
                                fontFamily={"DM Sans"}
                                fontWeight={400}
                                fontSize={15}
                                lineHeight={"normal"}
                                color={"#FFFFFF99"}
                                whiteSpace={"normal"}
                            >
                                {pointer.title}
                            </Typography>
                        </Card>
                    </Grid>
                )
            })}
        </KeyPointsWrapper>
    )
}