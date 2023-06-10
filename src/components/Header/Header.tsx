import classes from "./Header.module.scss";
import { Divider } from "../Divider/Divider";
import { ReactComponent as ShoppingCart } from "./../../assets/cart.svg";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { useProducts } from "../../hooks/useStore";
import { useState } from "react";
import { CartPreview } from "../CartPreview/CartPreview";

const Chip = () => {
  return <div className={classes.chip}>1</div>;
};

export const Header = () => {
  const [cartActive, setCartActive] = useState(false);

  const store = useProducts();
  console.log(store);

  const handleCartClick = () => {
    setCartActive(!cartActive);
  };

  return (
    <>
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <ShoppingCart onClick={handleCartClick} className={classes.shoppingCart} />
        <Chip />
        {cartActive && <CartPreview setCartActive={setCartActive} />}
      </div>
      <Divider />
    </>
  );
};
