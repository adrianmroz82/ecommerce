import classes from "./CategoryFilter.module.scss";

interface Props {
  items: string[];
  header: string;
}

export const Filter = ({ items, header }: Props) => {
  return (
    <>
      <h4>{header}</h4>
      {items.map((item, i) => (
        <div className={classes.filterItem} key={i}>
          <input className={classes.checkbox} type="checkbox" id={`checkbox-${item}`} />
          <label htmlFor={`checkbox-${item}`}>{item}</label>
        </div>
      ))}
    </>
  );
};
