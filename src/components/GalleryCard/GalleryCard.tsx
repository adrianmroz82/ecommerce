import { Button } from "../Button/Button";
import classes from "./GalleryCard.module.scss";

export const GalleryCard = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardImageContainer}>
        <div className={classes.cardBestSeller}>Bestseller</div>
        <img className={classes.cardImage} src="https://picsum.photos/1500" alt="" />
        <div className={classes.cardImageOverlayButton}>
          <Button text="Add to cart" variant="secondary" fullWidth />
        </div>
      </div>
      <div className={classes.textContainer}>
        <h5>People</h5>
        <h4>Red Bench</h4>
        <p>$3.89</p>
      </div>
    </div>
  );
};
