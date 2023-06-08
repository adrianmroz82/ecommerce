import { Filter } from "../CategoryFilter/CategoryFilter";
import { Divider } from "../Divider/Divider";
import { GalleryCard } from "../GalleryCard/GalleryCard";
import classes from "./ArtworkBrowser.module.scss";

const categoryFilterItems = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
const priceFilterItems = ["Lower than $20", "$20 - $100", "$100 - $200", "More than $200"];

const renderCards = (num: number) => {
  return Array(num)
    .fill(0)
    .map((_, i) => <GalleryCard key={i} />);
};

export const ArtworkBrowser = () => {
  return (
    <div className={classes.browserContainer}>
      <div className={classes.filterContainer}>
        <Filter items={categoryFilterItems} header="Category" />
        <Divider style={{ margin: "1rem 0" }} variant="thin" />
        <Filter items={priceFilterItems} header="Price range" />
      </div>
      <div className={classes.cardsContainer}>{renderCards(6)}</div>
    </div>
  );
};
