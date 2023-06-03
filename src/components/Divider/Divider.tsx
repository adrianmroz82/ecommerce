import classes from "./Divider.module.scss";

interface Props {
  height?: "bold" | "thin";
}

const Divider = ({ height }: Props) => {
  return (
    <hr
      style={{
        height: height === "thin" ? "1px" : "4px",
      }}
      className={classes.divider}
    />
  );
};

export default Divider;
