import { Box, styled } from "@mui/material";
import bg from "../../assets/usecasebg.svg";
import { Context } from "../../context";
import { useContext } from "react";

export const UseCasesWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        padding: "0 calc(var(--basic-padding) * 1)",
        marginBlock: "var(--basic-margin)",
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        '& .grid-item': {
            overflow: "hidden",
            height: "auto",
            borderRadius: "32px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            minHeight: "26.25rem",
            padding: "var(--basic-padding)",
            border: "1px solid #5D44DB",
        },
        "& .use-case-title": {
            borderBottom: "1px solid transparent",
            borderImage: "linear-gradient(to right, #FFFFFF 0%, #1757DA 100%) 1",
            marginBlockEnd: "var(--basic-margin)",
            marginLeft: "auto",
            marginRight: "auto",
            overflow: "hidden",
            [theme.breakpoints.up(300)]: {
                width: "fit-content",
            },
        },
        "& .use-case-card": {
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "100%",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "0 calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 1)",
        },
    }
})