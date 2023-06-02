interface Props {
  text: string;
  variant: "primary" | "secondary";
}

const Button = ({ text, variant }: Props) => {
  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "white" : "black",
        color: variant === "primary" ? "black" : "white",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
      }}>
      {text}
    </button>
  );
};

export default Button;
