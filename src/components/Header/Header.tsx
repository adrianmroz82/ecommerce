import classes from "./Header.module.scss";
import Divider from "../Divider/Divider";
// import cart from "./../../assets/shopping-cart.svg";
import { ReactComponent as ShoppingCart } from "./../../assets/cart.svg";
import { ReactComponent as Logo } from "./../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <ShoppingCart className={classes.shoppingCart} />
      </div>
      <Divider />
    </>
  );
};

export default Header;
