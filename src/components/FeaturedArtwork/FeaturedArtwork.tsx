import classes from "./FeaturedArtwork.module.scss";
import featured from "./../../assets/featured.png";
import bestseller1 from "./../../assets/bestseller1.png";
import bestseller2 from "./../../assets/bestseller2.png";
import bestseller3 from "./../../assets/bestseller3.png";

const BestSeller = () => {
  return (
    <div className={classes.bestSeller}>
      <div className={classes.bestSellerContainer}>
        <h4>People Also Buy</h4>
        <div className={classes.imagesContainer}>
          <img className={classes.bestSellerImage} src={bestseller1}></img>
          <img className={classes.bestSellerImage} src={bestseller2}></img>
          <img className={classes.bestSellerImage} src={bestseller3}></img>
        </div>
        <div className={classes.detailsContainer}>
          <h4>Details</h4>
          <p>Size: 1020 x 1020 pixel</p>
          <p>Size: 15 mb</p>
        </div>
      </div>
    </div>
  );
};

const FeaturedArtwork = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h2>Samurai King Resting</h2>
        <button>add to cart</button>
      </div>
      <img className={classes.featuredImage} src={featured} alt="featured artwork" />
      <div className={classes.mainContainer}>
        <div className={classes.descriptionContainer}>
          <h3>About the Samurai King Resting</h3>
          <h4>Pets</h4>
          So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely
          scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type
          specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various
          fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
        </div>
        <div className={classes.bestsellerContainer}>
          <BestSeller />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtwork;
