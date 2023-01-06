import { styled } from "../../styles";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray500",
      },
      green: {
        background: "$green500",
        color: "$white",

        "&:not(:disabled):hover": {
          backgroundColor: "$green300",
        },
      },
      white: {
        color: "$gray300",
        background: "$gray800",
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: "gray",
    size: "medium",
  }
});

export const CircleCount = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: 1000,
  background: "$green500",
  color: "$white",

  right: "-0.438rem",
  top: "-0.438rem",
});