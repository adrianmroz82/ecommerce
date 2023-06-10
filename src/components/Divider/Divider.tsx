import classes from "./Divider.module.scss";

interface Props {
  variant?: "bold" | "thin";
  style?: React.CSSProperties;
}

export const Divider = ({ variant, style }: Props) => {
  return (
    <hr
      style={{
        height: variant === "thin" ? "1px" : "4px",
        ...style,
      }}
      className={classes.divider}
    />
  );
};
