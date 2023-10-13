import styles from "./Sidebar.module.scss";
import { CategoryData } from "../../data/CategoryData";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../features/cartSlice";

interface RootState {
  cart: {
    selectedCategory: string;
  };
}

const Sidebar = () => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state: RootState) => state.cart);

  const handleCategory = (title: string) => {
    dispatch(setSelectedCategory(title));
  };

  return (
    <ul className={styles.container}>
      {CategoryData.map((item) => {
        const { id, title, icon } = item;
        return (
          <a
            href={`#${title}`}
            key={id}
            className={`${styles.inactive} ${
              title === selectedCategory ? styles.active : ""
            }`}
            onClick={() => handleCategory(title)}
          >
            <div className={styles.icon_div}>{icon}</div>
            <p>{title}</p>
          </a>
        );
      })}
    </ul>
  );
};

export default Sidebar;
