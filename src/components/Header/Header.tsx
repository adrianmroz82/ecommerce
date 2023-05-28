import classes from "./Header.module.scss";
import Divider from "../Divider/Divider";
// import cart from "./../../assets/shopping-cart.svg";
import { ReactComponent as ShoppingCart } from "./../../assets/cart.svg";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { useProducts } from "../../hooks/useStore";

const Header = () => {
  const store = useProducts();
  console.log(store);

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
