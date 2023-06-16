import { Filter } from "../CategoryFilter/CategoryFilter";
import { Divider } from "../Divider/Divider";
import { GalleryCard } from "../GalleryCard/GalleryCard";
import { Pagination } from "../Pagination/Pagination";
import classes from "./ArtworkBrowser.module.scss";
import { ReactComponent as SortIcon } from "./../../assets/sort-icon.svg";
import { ReactComponent as ArrowDown } from "./../../assets/arrow-down.svg";

// TODO: GENERIC BREADCRUMBS COMPONENT

const Sort = () => {
  return (
    <div className={classes.sort}>
      <span
        className={classes.sortText}
        style={{
          marginRight: "1rem",
          fontSize: "1.3rem",
        }}>
        <SortIcon style={{ marginRight: "0.5rem" }} />
        Sort By
      </span>

      <span
        className={classes.price}
        style={{
          fontSize: "1.3rem",
        }}>
        Price
        <ArrowDown style={{ marginLeft: "0.5rem" }} />
      </span>
    </div>
  );
};

const BreadCrumbs = () => {
  return (
    <div className={classes.breadCrumbs}>
      <span>Photography</span>
      <span className={classes.arrow}> / </span>
      Premium Photos
    </div>
  );
};

const categoryFilterItems = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
const priceFilterItems = ["Lower than $20", "$20 - $100", "$100 - $200", "More than $200"];

const renderCards = (num: number) => {
  return Array(num)
    .fill(0)
    .map((_, i) => <GalleryCard key={i} />);
};

export const ArtworkBrowser = () => {
  return (
    <>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3rem 0",
        }}
        className={classes.headerContainer}>
        <BreadCrumbs />
        <Sort />
      </div>
      <div className={classes.browserContainer}>
        <div className={classes.filterContainer}>
          <Filter items={categoryFilterItems} header="Category" />
          <Divider style={{ margin: "1rem 0" }} variant="thin" />
          <Filter items={priceFilterItems} header="Price range" />
        </div>
        <div className={classes.cardsContainer}>{renderCards(6)}</div>
      </div>
      <div className={classes.paginationWrapper}>
        <Pagination />
      </div>
    </>
  );
};
