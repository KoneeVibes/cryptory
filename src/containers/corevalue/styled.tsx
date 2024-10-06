import { useContext } from "react";
import { Context } from "../../context";
import { Stack, styled } from "@mui/material";
import bg from "../../assets/corevaluesbg.svg";

export const CoreValueWrapper = styled(Stack)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        borderRadius: "28px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        overflow: "hidden",
        padding: "calc(var(--basic-padding) * 1)",
        margin: "calc(var(--basic-padding) * 1)",
        gap: "var(--flex-gap)",
        border: "1px solid #5D44DB",
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        "& .text-area": {
            flex: 1,
            overflow: "hidden",
        },
        "& .animation-area": {
            flex: 1,
            overflow: "hidden",
            "& svg": {
                width: "100%",
                [theme.breakpoints.down("miniTablet")]: {
                    height: "auto",
                }
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2)",
            margin: "calc(var(--basic-padding) * 2)",
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            gap: "calc(var(--flex-gap) * 3)",
            alignItems: "center",
        }
    }
})