import { Box, Divider, Stack, Typography } from "@mui/material";
import { TokenomicsWrapper } from "./styled";
import { tokenAllocation, tokenomics, tokenTaxes } from "../../config";

export const Tokenomics = () => {
    return (
        <TokenomicsWrapper>
            <Box
                component={"div"}
                width={{ miniTablet: "70%", tablet: "50%", laptop: "40%" }}
                className="tokenomics-title"
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
                    Tokenomics
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
                    Innovative tools/utilities at your fingertip.
                </Typography>
            </Box>
            <Stack
                direction={{ laptop: "row" }}
                marginBlockStart={{ mobile: "var(--basic-margin)", tablet: 0 }}
            >
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
                {tokenomics.map((keypoint, index) => {
                    return (
                        <Box
                            key={index}
                            component={"div"}
                            className="bordered-box"
                            flex={2}
                        >
                            <Stack
                                gap={"0.5rem"}
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily={"Gilroy"}
                                    fontWeight={500}
                                    fontSize={18}
                                    lineHeight={"normal"}
                                    color={"#CACFFF"}
                                    whiteSpace={"normal"}
                                >
                                    {keypoint.title}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontFamily={"Dm Sans"}
                                    fontWeight={600}
                                    fontSize={24}
                                    lineHeight={"normal"}
                                    color={"#FFFFFF"}
                                    whiteSpace={"normal"}
                                >
                                    {keypoint.value}
                                </Typography>
                            </Stack>
                        </Box>
                    )
                })}
                <Box
                    component={"div"}
                    className="bordered-box"
                    flex={0.5}
                    display={{ mobile: "none", laptop: "block" }}
                />
            </Stack>
            <Box>
                <Stack
                    component={"div"}
                    className="tokenomics-subsection"
                >
                    <Divider
                        className="underline"
                    />
                    <Typography
                        variant="h2"
                        fontFamily={"Gilroy"}
                        fontWeight={500}
                        fontSize={25}
                        lineHeight={"normal"}
                        color={"#9099FF"}
                        whiteSpace={"normal"}
                        padding={{ tablet: "0 0.5rem" }}
                    >
                        Tokens Allocation
                    </Typography>
                    <Divider
                        className="underline"
                    />
                </Stack>
                <Stack
                    direction={{ laptop: "row" }}
                >
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                    {tokenAllocation.slice(0, 2).map((allocation, index) => {
                        return (
                            <Box
                                key={index}
                                component={"div"}
                                className="bordered-box"
                                flex={2.25}
                            >
                                <Stack
                                    gap={"0.5rem"}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Gilroy"}
                                        fontWeight={500}
                                        fontSize={18}
                                        lineHeight={"normal"}
                                        color={"#CACFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {allocation.title}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Dm Sans"}
                                        fontWeight={600}
                                        fontSize={24}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {allocation.value}
                                    </Typography>
                                </Stack>
                            </Box>
                        )
                    })}
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                </Stack>
                <Stack
                    direction={{ laptop: "row" }}
                >
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                    {tokenAllocation.slice(2, 4).map((allocation, index) => {
                        return (
                            <Box
                                key={index}
                                component={"div"}
                                className="bordered-box"
                                flex={2.25}
                            >
                                <Stack
                                    gap={"0.5rem"}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Gilroy"}
                                        fontWeight={500}
                                        fontSize={18}
                                        lineHeight={"normal"}
                                        color={"#CACFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {allocation.title}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Dm Sans"}
                                        fontWeight={600}
                                        fontSize={24}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {allocation.value}
                                    </Typography>
                                </Stack>
                            </Box>
                        )
                    })}
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                </Stack>
                <Stack
                    direction={{ laptop: "row" }}
                >
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                    {tokenAllocation.slice(4, 6).map((allocation, index) => {
                        return (
                            <Box
                                key={index}
                                component={"div"}
                                className="bordered-box"
                                flex={2.25}
                            >
                                <Stack
                                    gap={"0.5rem"}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Gilroy"}
                                        fontWeight={500}
                                        fontSize={18}
                                        lineHeight={"normal"}
                                        color={"#CACFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {allocation.title}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Dm Sans"}
                                        fontWeight={600}
                                        fontSize={24}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {allocation.value}
                                    </Typography>
                                </Stack>
                            </Box>
                        )
                    })}
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                </Stack>
            </Box>
            <Box>
                <Stack
                    component={"div"}
                    className="tokenomics-subsection"
                >
                    <Divider
                        className="underline"
                    />
                    <Typography
                        variant="h2"
                        fontFamily={"Gilroy"}
                        fontWeight={500}
                        fontSize={25}
                        lineHeight={"normal"}
                        color={"#9099FF"}
                        whiteSpace={"normal"}
                        padding={{ tablet: "0 0.5rem" }}
                    >
                        Token Taxes
                    </Typography>
                    <Divider
                        className="underline"
                    />
                </Stack>
                <Stack
                    direction={{ laptop: "row" }}
                >
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                    {tokenTaxes.slice(0, 2).map((tax, index) => {
                        return (
                            <Box
                                key={index}
                                component={"div"}
                                className="bordered-box"
                                flex={2.25}
                            >
                                <Stack
                                    gap={"0.5rem"}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Gilroy"}
                                        fontWeight={700}
                                        fontSize={18}
                                        lineHeight={"normal"}
                                        color={"#CACFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {tax.title}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Dm Sans"}
                                        fontWeight={400}
                                        fontSize={24}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {tax.value}
                                    </Typography>
                                </Stack>
                            </Box>
                        )
                    })}
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                </Stack>
                <Stack
                    direction={{ laptop: "row" }}
                >
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                    {tokenTaxes.slice(2, 4).map((tax, index) => {
                        return (
                            <Box
                                key={index}
                                component={"div"}
                                className="bordered-box"
                                flex={2.25}
                            >
                                <Stack
                                    gap={"0.5rem"}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Gilroy"}
                                        fontWeight={700}
                                        fontSize={18}
                                        lineHeight={"normal"}
                                        color={"#CACFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {tax.title}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Dm Sans"}
                                        fontWeight={400}
                                        fontSize={24}
                                        lineHeight={"normal"}
                                        color={"#FFFFFF"}
                                        whiteSpace={"normal"}
                                    >
                                        {tax.value}
                                    </Typography>
                                </Stack>
                            </Box>
                        )
                    })}
                    <Box
                        component={"div"}
                        className="bordered-box"
                        flex={0.35}
                        display={{ mobile: "none", laptop: "block" }}
                    />
                </Stack>
            </Box>
        </TokenomicsWrapper>
    )
}