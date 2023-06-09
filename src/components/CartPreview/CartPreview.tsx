import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import classes from "./CartPreview.module.scss";
import { ReactComponent as CloseIcon } from "./../../assets/close-icon.svg";
import featured from "../../assets/featured.png";

interface Props {
  setCartActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartPreview = ({ setCartActive }: Props) => {
  const handleClose = () => {
    setCartActive(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.closeIcon} onClick={handleClose}>
        <CloseIcon />
      </div>

      <div className={classes.itemContainer}>
        <div className={classes.left}>
          <div className={classes.itemName}>
            <h4>Samurai King Resting</h4>
          </div>
          <div className={classes.itemPrice}>
            <p>$10000.00</p>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.itemImageContainer}>
            <img className={classes.itemImage} src={featured} alt="" />
          </div>
        </div>
      </div>

      <div className={classes.divider}>
        <Divider variant="thin" />
      </div>
      <div className={classes.button}>
        <Button text="Clear" fullWidth />
      </div>
    </div>
  );
};
