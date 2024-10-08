import { useContext } from "react";
import { Container, styled } from "@mui/material";
import { Context } from "../../context";
import bg from "../../assets/securityandtokenomicsbg.svg";

export const HomeWrapper = styled(Container)(() => {
    const { openMenu } = useContext(Context);
    return {
        "& .security-and-tokenomics": {
            position: "relative",
            top: openMenu ? "var(--mobile-nav-height)" : "0",
            overflow: "hidden",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
        }
    }
})