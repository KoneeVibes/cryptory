import { Navigation } from "../../components/navigation";
import { CoreValue } from "../../containers/corevalue";
import { GoToMarket } from "../../containers/gotomarket";
import { Hero } from "../../containers/hero";
import { KeyTargets } from "../../containers/keypoints";
import { MarqueeStack } from "../../containers/marquee";
import { UseCases } from "../../containers/usecases";
import { HomeWrapper } from "./styled";

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
        </HomeWrapper>
    )
}