import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonPropTypes } from "../../types/app.type";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropTypes>(({ variant, fontSize, radius, padding, border, background }) => {
    return {
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: fontSize || 15,
        lineHeight: "normal",
        borderRadius: radius || "12px",
        border: border || "none",
        color: "#FFFFFF",
        background: (variant === "contained") ? background : "transparent",
        padding: padding || "calc(var(--basic-padding)/2) calc(var(--basic-padding))",
        textTransform: "capitalize",
        minWidth: 0,
        "&:hover": {
            border: border || "none",
            background: (variant === "contained") ? background : "transparent",
        }
    }
})