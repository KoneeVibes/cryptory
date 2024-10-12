import { Stack, styled } from "@mui/material";
import { useContext, useEffect } from "react";
import { Context } from "../../context";

export const NavigationWrapper = styled(Stack)(({ theme }) => {
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        const handleResize = () => {
            setOpenMenu(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setOpenMenu]);
    return {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "var(--basic-padding)",
        gap: "var(--flex-gap)",
        borderBottom: !openMenu ? "1px solid #FFFFFF1A" : "none",
        "& .favicon-box": {
            "& svg": {
                width: "100%",
                height: "auto",
                cursor: "pointer",
            }
        },
        "& .hamburger": {
            overflow: "hidden",
        },
        "& .nav-links": {
            display: openMenu ? "flex" : "none",
            gap: "var(--flex-gap)",
            position: "absolute",
            top: "7.375rem",
            left: 0,
            right: 0,
            padding: "0 var(--basic-padding)",
        },
        "& .launch-button": {
            display: openMenu ? "flex" : "none",
            position: "absolute",
            top: "23.875rem",
            left: 0,
            right: 0,
            padding: "0 var(--basic-padding) var(--basic-padding)",
            overflow: "hidden",
            borderBottom: openMenu ? "1px solid #FFFFFF1A" : "none",
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            "& .nav-links": {
                padding: "0 calc(var(--basic-padding) * 2)",
            },
            "& .launch-button": {
                padding: "0 calc(var(--basic-padding) * 2) var(--basic-padding)",
            },
        },
        [theme.breakpoints.up("desktop")]: {
            borderBottom: "1px solid #FFFFFF1A",
            "& .nav-links": {
                display: "flex",
                flexDirection: "row",
                position: "static"
            },
            "& .hamburger": {
                display: "none",
            },
            "& .launch-button": {
                display: "block",
                position: "static",
                padding: 0,
            }
        }
    }
})