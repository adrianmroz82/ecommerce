/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MouseEvent } from "react";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
}

export const Button = ({ text, variant, fullWidth }: Props) => {
  const getButtonStyle = () => {
    if (variant === "primary") {
      return {
        backgroundColor: "white",
        color: "black",
      };
    } else if (variant === "secondary") {
      return {
        backgroundColor: "black",
        color: "white",
      };
    }
  };

  const getHoverStyle = () => {
    if (variant === "primary") {
      return {
        backgroundColor: "black",
        color: "white",
      };
    } else if (variant === "secondary") {
      return {
        backgroundColor: "white",
        color: "black",
      };
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const hoverStyle = getHoverStyle();
    target.style.backgroundColor = hoverStyle!.backgroundColor;
    target.style.color = hoverStyle!.color;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const buttonStyle = getButtonStyle();
    target.style.backgroundColor = buttonStyle!.backgroundColor;
    target.style.color = buttonStyle!.color;
  };

  return (
    <button
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        width: fullWidth ? "100%" : "auto",
        textTransform: "uppercase",
        letterSpacing: "2px",
        transition: "background-color 0.5s, color 0.5s", // Add transition property

        ...getButtonStyle(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {text}
    </button>
  );
};
