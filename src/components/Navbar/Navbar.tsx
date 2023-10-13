import styles from "./Navbar.module.scss";
import cartIcon from "../../assets/cart.png";
import { useSelector } from "react-redux";

interface RootState {
  cart: {
    selectedItems: string[];
  };
}

const Navbar = () => {
  const { selectedItems } = useSelector((state: RootState) => state.cart);
  return (
    <nav className={styles.navbar}>
      <p className={styles.nav_title}>E-Commerce</p>
      <div className={styles.cart_div}>
        <img src={cartIcon} alt="cart" />
        <p>{selectedItems.length}</p>
      </div>
    </nav>
  );
};

export default Navbar;
