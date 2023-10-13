import styles from "./Foods.module.scss";
import rightArrow from "../../assets/right.svg";
import addIcon from "../../assets/add.svg";
import minusIcon from "../../assets/minus.svg";
import { FoodData, FoodItem } from "../../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../features/cartSlice";

interface RootState {
  cart: {
    selectedItems: string[];
    selectedCategory: string;
  };
}

const Foods = () => {
  return (
    <div className={styles.container}>
      {FoodData.map((item) => (
        <SingleItemList {...item} key={item.id} />
      ))}
    </div>
  );
};

const SingleItemList = ({ ...item }) => {
  const { category, foods } = item;
  return (
    <div className={styles.list_container} id={category}>
      <div className={styles.list_title}>
        <h2>{category}</h2>
        <img src={rightArrow} alt="arrow" />
      </div>
      <div className={styles.items}>
        {foods.map((food: FoodItem) => (
          <Item {...food} key={food.title} />
        ))}
      </div>
      <div className={styles.line} />
    </div>
  );
};

const Item = ({ ...food }) => {
  const dispatch = useDispatch();
  const { title, price, quantity, image } = food;
  const { selectedItems } = useSelector((state: RootState) => state.cart);
  const foodIsAdded = selectedItems.find((food) => food === title);

  const handleAddToCart = (itemId: string) => {
    dispatch(addItem(itemId));
  };

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className={styles.item_div}>
      {foodIsAdded ? (
        <img
          className={styles.add_btn}
          src={minusIcon}
          alt="minus"
          onClick={() => handleRemoveFromCart(title)}
        />
      ) : (
        <img
          className={styles.add_btn}
          src={addIcon}
          alt="add"
          onClick={() => handleAddToCart(title)}
        />
      )}
      <img src={image} alt="item" />
      <h6>{price}</h6>
      <p className={styles.item_title}>{title}</p>
      <p className={styles.quantity}>{quantity}</p>
    </div>
  );
};

export default Foods;
