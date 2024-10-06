import { Box, Typography } from "@mui/material";
import { CoreValueWrapper } from "./styled";
import { AnimatedLogo } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CoreValue = () => {
    return (
        <CoreValueWrapper>
            <Box
                component={"div"}
                className="text-area"
            >
                <Typography
                    variant="h2"
                    fontFamily={"Gilroy"}
                    fontWeight={600}
                    fontSize={22}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    marginBlockEnd={"var(--basic-margin)"}
                >
                    Core Values
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Manrope"}
                    fontWeight={400}
                    fontSize={16}
                    lineHeight={"normal"}
                    color={"#FFFFFF99"}
                    whiteSpace={"normal"}
                >
                    At Cryptory, we are guided by three core values: integrity, diligence, and accountability. These values shape the way we conduct ourselves as a company and inform our interactions with our customers, partners, and employees.
                </Typography>
                <BaseButton
                    radius="2rem"
                    background="#010123"
                    variant="contained"
                    border="1px solid #5D44DB"
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{ marginBlockStart: "var(--basic-margin)" }}
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
                        Learn More
                    </Typography>
                </BaseButton>
            </Box>
            <Box
                component={"div"}
                className="animation-area"
            >
                <AnimatedLogo />
            </Box>
        </CoreValueWrapper>
    )
}