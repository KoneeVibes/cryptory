import { HashLink } from "react-router-hash-link";
import { Box, Stack, Typography } from "@mui/material";
import { NavigationWrapper } from "./styled";
import { Favicon } from "../../assets";
import { navLinks } from "../../config";
import { BaseButton } from "../button/styled";
import { MenuButton } from "../button/menu";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("/");
    };
    return (
        <NavigationWrapper>
            <Box
                component={"div"}
                className="favicon-box"
            >
                <Favicon
                    onClick={handleLogoClick}
                />
            </Box>
            <Stack
                className="nav-links"
            >
                {navLinks.map((navLink, index) => {
                    return (
                        <HashLink
                            key={index}
                            to={navLink.url}
                            smooth={true}
                        >
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Manrope"}
                                fontWeight={500}
                                fontSize={15}
                                lineHeight={"normal"}
                                color={"#FFFFFF"}
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                {navLink.name}
                            </Typography>
                        </HashLink>
                    )
                })}
            </Stack>
            <Box
                component={"div"}
                className="launch-button"
            >
                <BaseButton
                    border={"1px solid #1F1F1F"}
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
                        Launch App
                    </Typography>
                </BaseButton>
            </Box>
            <Box
                component={"div"}
                className="hamburger"
            >
                <MenuButton />
            </Box>
        </NavigationWrapper>
    )
}