import { Box } from "@mui/material";
import { Navigation } from "../../components/navigation";
import { CoreValue } from "../../containers/corevalue";
import { GoToMarket } from "../../containers/gotomarket";
import { Hero } from "../../containers/hero";
import { KeyTargets } from "../../containers/keypoints";
import { MarqueeStack } from "../../containers/marquee";
import { UseCases } from "../../containers/usecases";
import { HomeWrapper } from "./styled";
import { Security } from "../../containers/security";
import { Tokenomics } from "../../containers/tokenomics";
import { Roadmap } from "../../containers/roadmap";
import { Team } from "../../containers/team";

export const Home = () => {
    return (
        <HomeWrapper
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Navigation />
            <Hero />
            <MarqueeStack />
            <KeyTargets />
            <CoreValue />
            <UseCases />
            <GoToMarket />
            <Box
                component={"div"}
                className="security-and-tokenomics"
            >
                <Security />
                <Tokenomics />
            </Box>
            <Roadmap />
            <Team />
        </HomeWrapper>
    )
}