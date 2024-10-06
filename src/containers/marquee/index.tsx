import { MarqueeWrapper } from "./styled";
import { brands } from "../../config";
import { Fragment } from "react/jsx-runtime";
import Marquee from "react-fast-marquee";

export const MarqueeStack = () => {
    return (
        <MarqueeWrapper>
            <Marquee
                autoFill={true}
            >
                {brands.map((brand, index) => {
                    return (
                        <Fragment key={index}>
                            {brand.icon}
                        </Fragment>
                    )
                })}
            </Marquee>
        </MarqueeWrapper>
    )
}