interface Props {
  text: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button = ({ text, variant, fullWidth }: Props) => {
  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "white" : "black",
        color: variant === "primary" ? "black" : "white",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        width: fullWidth ? "100%" : "auto",
        textTransform: "uppercase",
        letterSpacing: "2px",
      }}>
      {text}
    </button>
  );
};

export default Button;
