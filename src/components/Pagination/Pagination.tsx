import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

export const Pagination = () => {
  const standard = "#B4B4B4";

  // TODO: marginBottom on mobile ~5rem?

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flexBasis: "75%" }}>
      <ArrowLeft style={{ marginRight: "1rem" }} />
      <div style={{ marginRight: "1rem", color: standard, fontWeight: "600" }}>1</div>
      <div style={{ marginRight: "1rem", color: standard, fontWeight: "600" }}>2</div>
      <div style={{ marginRight: "1rem", fontWeight: "600" }}>3</div>
      <div style={{ color: standard, fontWeight: "600" }}>4</div>
      <ArrowRight style={{ marginLeft: "1rem" }} />
    </div>
  );
};
