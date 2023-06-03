import classes from "./FeaturedArtwork.module.scss";
import featured from "./../../assets/featured.png";
import bestseller1 from "./../../assets/bestseller1.png";
import bestseller2 from "./../../assets/bestseller2.png";
import bestseller3 from "./../../assets/bestseller3.png";
import PhotoOfTheDay from "../PhotoOfTheDay/PhotoOfTheDay";
import Button from "../Button/Button";
import CartPreview from "../CartPreview/CartPreview";

const BestSeller = () => {
  return (
    <div className={classes.bestSeller}>
      <h4>People Also Buy</h4>
      <div className={classes.imagesContainer}>
        <img className={classes.bestSellerImage} src={bestseller1} />
        <img className={classes.bestSellerImage} src={bestseller2} />
        <img className={classes.bestSellerImage} src={bestseller3} />
      </div>
      <div className={classes.detailsContainer}>
        <h4>Details</h4>
        <p>Size: 1020 x 1020 pixel</p>
        <p>Size: 15 mb</p>
      </div>
    </div>
  );
};

const FeaturedArtwork = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h2>Samurai King Resting</h2>
        <Button text="Add to cart" variant="secondary" />
      </div>
      <CartPreview />
      <div className={classes.imageContainer}>
        <PhotoOfTheDay />
        <img className={classes.featuredImage} src={featured} alt="featured artwork" />
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.descriptionContainer}>
          <h3>About the Samurai King Resting</h3>
          <h4>Pets</h4>
          <p>
            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter
            likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts
            for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a
            15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to
            mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </p>
        </div>
        <div className={classes.bestSellerContainer}>
          <BestSeller />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtwork;
