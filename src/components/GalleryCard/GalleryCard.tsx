import classes from "./GalleryCard.module.scss";

export const GalleryCard = () => {
  return (
    <div>
      <div className={classes.cardImageContainer}>
        <img className={classes.cardImage} src="https://picsum.photos/200" alt="" />
        {/* add bestseller tag */}
      </div>
      <div className={classes.textContainer}>
        <h5>People</h5>
        <h4>Red Bench</h4>
        <p>$3.89</p>
      </div>
    </div>
  );
};
